import React from 'react'
import { useLanguage } from '../../context/LanguageContext'

const Projects: React.FC = () => {
  const { tr } = useLanguage()

  return (
    <section id="projects" className="py-24 px-4 bg-gray-50 dark:bg-gray-900/40">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">
          {tr.projects.title}
        </h2>
        <div className="w-12 h-1 bg-indigo-500 rounded mb-12" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tr.projects.items.map((project, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 flex flex-col hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-0.5 transition-all"
            >
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 leading-snug">
                    {project.name}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-800">
                <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">{project.period}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
