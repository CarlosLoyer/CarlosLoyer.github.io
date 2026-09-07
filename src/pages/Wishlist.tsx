import React, { useEffect, useState } from 'react'
import { ExternalLink, Gift } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

type Row = Record<string, string>

/**
 * Parser CSV (RFC 4180): soporta comillas dobles, comas y saltos de línea
 * dentro de un campo, y `""` como comilla escapada.
 */
const parseCsv = (text: string): string[][] => {
  const rows: string[][] = []
  let row: string[] = []
  let field = ''
  let inQuotes = false

  // Quita el BOM que agregan Excel y compañía al guardar.
  const input = text.charCodeAt(0) === 0xfeff ? text.slice(1) : text

  for (let i = 0; i < input.length; i++) {
    const char = input[i]

    if (inQuotes) {
      if (char === '"') {
        if (input[i + 1] === '"') {
          field += '"'
          i++
        } else {
          inQuotes = false
        }
      } else {
        field += char
      }
      continue
    }

    if (char === '"') {
      inQuotes = true
    } else if (char === ',') {
      row.push(field)
      field = ''
    } else if (char === '\n' || char === '\r') {
      // Consume el \n de un \r\n para no generar una fila vacía extra.
      if (char === '\r' && input[i + 1] === '\n') i++
      row.push(field)
      rows.push(row)
      row = []
      field = ''
    } else {
      field += char
    }
  }

  if (field !== '' || row.length > 0) {
    row.push(field)
    rows.push(row)
  }

  return rows.filter(r => r.some(cell => cell.trim() !== ''))
}

const DIACRITICS = new RegExp('[\\u0300-\\u036f]', 'g')

/** Clave normalizada de una columna: sin acentos, sin espacios, en minúsculas. */
const normalizeKey = (header: string) =>
  header.trim().toLowerCase().normalize('NFD').replace(DIACRITICS, '')

const LINK_KEYS = ['enlace', 'link', 'url']
const NAME_KEYS = ['nombre', 'item', 'cosa', 'producto']
const PRIORITY_KEYS = ['prioridad', 'priority', 'ganas']

const PRIORITY_STYLES: Record<string, string> = {
  alta: 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-100 dark:border-indigo-900',
  media: 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border-amber-100 dark:border-amber-900',
  baja: 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700',
}

const Wishlist: React.FC = () => {
  const { tr } = useLanguage()
  const [headers, setHeaders] = useState<string[]>([])
  const [rows, setRows] = useState<Row[]>([])
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')

  useEffect(() => {
    let cancelled = false

    const load = async () => {
      try {
        // BASE_URL mantiene la ruta correcta si el sitio se sirve en un subdirectorio.
        const response = await fetch(`${import.meta.env.BASE_URL}wishlist.csv`, {
          cache: 'no-cache',
        })
        if (!response.ok) throw new Error(`HTTP ${response.status}`)

        const table = parseCsv(await response.text())
        if (cancelled) return

        const [headerRow, ...dataRows] = table
        if (!headerRow) {
          setHeaders([])
          setRows([])
          setStatus('ready')
          return
        }

        const cols = headerRow.map(h => h.trim())
        setHeaders(cols)
        setRows(
          dataRows.map(cells =>
            cols.reduce<Row>((row, col, i) => {
              row[normalizeKey(col)] = (cells[i] ?? '').trim()
              return row
            }, {})
          )
        )
        setStatus('ready')
      } catch (error) {
        console.error('Error al cargar la wishlist:', error)
        if (!cancelled) setStatus('error')
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  const linkHeader = headers.find(h => LINK_KEYS.includes(normalizeKey(h)))
  const linkKey = linkHeader ? normalizeKey(linkHeader) : null
  // El enlace se muestra sobre el nombre, así que no necesita columna propia.
  const visibleHeaders = headers.filter(h => normalizeKey(h) !== linkKey)

  const labelFor = (header: string) => {
    const key = normalizeKey(header)
    if (NAME_KEYS.includes(key)) return tr.wishlist.columns.item
    if (key === 'categoria' || key === 'category') return tr.wishlist.columns.category
    if (key === 'precio' || key === 'price') return tr.wishlist.columns.price
    if (PRIORITY_KEYS.includes(key)) return tr.wishlist.columns.priority
    if (key === 'notas' || key === 'notes') return tr.wishlist.columns.notes
    return header
  }

  const renderCell = (row: Row, header: string) => {
    const key = normalizeKey(header)
    const value = row[key] ?? ''
    const href = linkKey ? row[linkKey] : ''

    if (NAME_KEYS.includes(key)) {
      if (!href) {
        return <span className="font-medium text-gray-900 dark:text-gray-100">{value}</span>
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-flex items-center gap-1.5"
        >
          {value}
          <ExternalLink size={13} className="text-gray-400 shrink-0" />
        </a>
      )
    }

    if (PRIORITY_KEYS.includes(key) && value) {
      const level = normalizeKey(value)
      const styles = PRIORITY_STYLES[level] ?? PRIORITY_STYLES.baja
      const label =
        tr.wishlist.priorities[level as keyof typeof tr.wishlist.priorities] ?? value
      return (
        <span className={`px-2 py-0.5 text-xs rounded-md border whitespace-nowrap ${styles}`}>
          {label}
        </span>
      )
    }

    return value || <span className="text-gray-300 dark:text-gray-700">—</span>
  }

  return (
    <section className="pt-28 pb-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2.5 mb-2">
          <Gift size={26} className="text-indigo-500 shrink-0" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {tr.wishlist.title}
          </h1>
        </div>
        <div className="w-12 h-1 bg-indigo-500 rounded mb-5" />
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-10 max-w-2xl">
          {tr.wishlist.subtitle}
        </p>

        {status === 'loading' && (
          <p className="text-sm text-gray-500 dark:text-gray-400">{tr.wishlist.loading}</p>
        )}

        {status === 'error' && (
          <p className="text-sm text-red-600 dark:text-red-400">{tr.wishlist.error}</p>
        )}

        {status === 'ready' && rows.length === 0 && (
          <p className="text-sm text-gray-500 dark:text-gray-400">{tr.wishlist.empty}</p>
        )}

        {status === 'ready' && rows.length > 0 && (
          <>
            {/* Tabla en pantallas medianas hacia arriba */}
            <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    {visibleHeaders.map(header => (
                      <th
                        key={header}
                        className="text-left font-semibold text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 px-5 py-3"
                      >
                        {labelFor(header)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b last:border-0 border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors"
                    >
                      {visibleHeaders.map(header => (
                        <td
                          key={header}
                          className="px-5 py-4 align-top text-gray-600 dark:text-gray-400"
                        >
                          {renderCell(row, header)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Tarjetas en móvil */}
            <div className="md:hidden flex flex-col gap-3">
              {rows.map((row, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5"
                >
                  {visibleHeaders.map(header => {
                    const key = normalizeKey(header)
                    if (NAME_KEYS.includes(key)) {
                      return (
                        <div key={header} className="mb-3">
                          {renderCell(row, header)}
                        </div>
                      )
                    }
                    if (!row[key]) return null
                    return (
                      <div key={header} className="flex gap-3 py-1 text-sm">
                        <span className="text-gray-400 dark:text-gray-500 shrink-0 min-w-24">
                          {labelFor(header)}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                          {renderCell(row, header)}
                        </span>
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Wishlist
