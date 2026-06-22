import React from 'react'
import { useLanguage } from '../../context/LanguageContext'

const Skills: React.FC = () => {
  const { tr } = useLanguage()

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">
          {tr.skills.title}
        </h2>
        <div className="w-12 h-1 bg-indigo-500 rounded mb-12" />

        <div className="space-y-7">
          {tr.skills.categories.map((cat, i) => (
            <div key={i} className="flex flex-col sm:flex-row gap-3 sm:gap-6">
              <div className="sm:w-36 shrink-0 pt-0.5">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {cat.name}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map(item => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
