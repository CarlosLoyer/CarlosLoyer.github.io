import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Footer: React.FC = () => {
  const { tr } = useLanguage()

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} Carlos Loyer. {tr.footer.rights}
        </p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:me@carlosloyer.cl"
            className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={19} />
          </a>
          <a
            href="https://www.linkedin.com/in/carlosloyer/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={19} />
          </a>
          <a
            href="https://github.com/carlosloyer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={19} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
