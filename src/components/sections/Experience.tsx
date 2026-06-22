import React from 'react'
import { Briefcase, GraduationCap } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

const Experience: React.FC = () => {
  const { tr } = useLanguage()

  return (
    <section id="experience" className="py-24 px-4 bg-gray-50 dark:bg-gray-900/40">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">
          {tr.experience.title}
        </h2>
        <div className="w-12 h-1 bg-indigo-500 rounded mb-12" />

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gray-200 dark:bg-gray-800 hidden sm:block" />

          <div className="space-y-8">
            {tr.experience.jobs.map((job, i) => (
              <div key={i} className="sm:pl-12 relative">
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-indigo-500 border-4 border-gray-50 dark:border-gray-950 hidden sm:flex items-center justify-center shadow-md shadow-indigo-500/30">
                  <Briefcase size={10} className="text-white" />
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:border-indigo-200 dark:hover:border-indigo-900 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">{job.company}</h3>
                      <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium">{job.role}</p>
                    </div>
                    <span className="text-xs text-gray-500 shrink-0 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded-md whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {job.bullets.map((bullet, j) => (
                      <li key={j} className="text-sm text-gray-600 dark:text-gray-400 flex gap-2.5 leading-relaxed">
                        <span className="text-indigo-400 mt-1 shrink-0 text-xs">▸</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
            {tr.experience.educationTitle}
          </h3>
          <div className="w-8 h-1 bg-indigo-500 rounded mb-8" />

          <div className="grid sm:grid-cols-2 gap-4">
            {tr.experience.education.map((edu, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5 flex gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 flex items-center justify-center shrink-0 border border-indigo-100 dark:border-indigo-900">
                  <GraduationCap size={18} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm text-gray-900 dark:text-gray-100 leading-snug">{edu.degree}</p>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">{edu.institution}</p>
                  <p className="text-xs text-gray-500 mt-1">{edu.period}</p>
                  {edu.note && (
                    <p className="text-xs text-gray-500 mt-0.5">{edu.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
