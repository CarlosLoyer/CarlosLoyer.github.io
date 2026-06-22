import React from 'react'
import { MapPin, Mail, Linkedin } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

const About: React.FC = () => {
  const { tr } = useLanguage()

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">
          {tr.about.title}
        </h2>
        <div className="w-12 h-1 bg-indigo-500 rounded mb-10" />

        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3 space-y-5">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{tr.about.p1}</p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{tr.about.p2}</p>
          </div>
          <div className="md:col-span-2">
            <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 space-y-4">
              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <MapPin size={15} className="text-indigo-500 shrink-0" />
                <span>{tr.about.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <Mail size={15} className="text-indigo-500 shrink-0" />
                <a
                  href={`mailto:${tr.about.email}`}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors break-all"
                >
                  {tr.about.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <Linkedin size={15} className="text-indigo-500 shrink-0" />
                <a
                  href="https://www.linkedin.com/in/carlosloyer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors break-all"
                >
                  {tr.about.linkedin}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
