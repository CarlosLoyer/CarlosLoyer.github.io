import React from 'react'
import { Mail, Linkedin, Github } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

const Contact: React.FC = () => {
  const { tr } = useLanguage()

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">
          {tr.contact.title}
        </h2>
        <div className="w-12 h-1 bg-indigo-500 rounded mx-auto mb-6" />
        <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
          {tr.contact.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="mailto:me@carlosloyer.cl"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            <Mail size={17} />
            {tr.contact.emailLabel}
          </a>
          <a
            href="https://www.linkedin.com/in/carlosloyer/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-all hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            <Linkedin size={17} />
            {tr.contact.linkedinLabel}
          </a>
          <a
            href="https://github.com/carlosloyer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-all hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            <Github size={17} />
            {tr.contact.githubLabel}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
