import React, { useState } from 'react'
import { CreditCard, Copy, Check, User, Landmark, PiggyBank, Mail } from 'lucide-react'

const BankDetails: React.FC = () => {
  const [copied, setCopied] = useState(false)

  const bankDetails = {
    accountRut: '18681404-5',
    accountName: 'Carlos Loyer Gaete',
    accountEmail: 'cloyer.gaete@gmail.com',
    accountBank: 'Banco Santander',
    accountType: 'Cuenta Corriente',
    accountNumber: '77863125',
  }

  const copyToClipboard = () => {
    const detailsText = `${bankDetails.accountName}\n${bankDetails.accountRut}\n${bankDetails.accountBank}\n${bankDetails.accountType}\n${bankDetails.accountNumber}\n${bankDetails.accountEmail}`
    navigator.clipboard.writeText(detailsText).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section id="bank" className="mb-12">
      <h2 className="text-3xl font-bold mb-4 text-blue-400">Datos para Transferencia</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
          <User className="w-6 h-6 mr-2 text-blue-400" />
          <p>Nombre: {bankDetails.accountName}</p>
        </div>
        <div className="flex items-center mb-4">
          <User className="w-6 h-6 mr-2 text-blue-400" />
          <p>RUT: {bankDetails.accountRut}</p>
        </div>
        <div className="flex items-center mb-4">
          <Landmark className="w-6 h-6 mr-2 text-blue-400" />
          <p>Banco: {bankDetails.accountBank}</p>
        </div>
        <div className="flex items-center mb-4">
          <PiggyBank className="w-6 h-6 mr-2 text-blue-400" />
          <p>Tipo Cuenta: {bankDetails.accountType}</p>
        </div>
        <div className="flex items-center mb-4">
          <CreditCard className="w-6 h-6 mr-2 text-blue-400" />
          <p>Nro Cuenta: {bankDetails.accountNumber}</p>
        </div>
        <div className="flex items-center mb-4">
          <Mail className="w-6 h-6 mr-2 text-blue-400" />
          <p>Email: {bankDetails.accountEmail}</p>
        </div>
        <button
          onClick={copyToClipboard}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Copiado!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-2" />
            </>
          )}
        </button>
      </div>
    </section>
  )
}

export default BankDetails