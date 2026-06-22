import React from 'react'
import { ArrowDown } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

const Hero: React.FC = () => {
  const { tr } = useLanguage()

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient blob */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99,102,241,0.15) 0%, transparent 70%)',
        }}
      />
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(99,102,241,0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.4,
        }}
      />

      <div className="relative z-10 text-center px-4 animate-fade-in">
        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-4 tracking-widest uppercase">
          {tr.hero.greeting}
        </p>
        <h1
          className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-4 leading-none pb-2"
          style={{
            background: 'linear-gradient(135deg, #a5b4fc 0%, #e879f9 45%, #818cf8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Carlos Loyer
        </h1>
        <p className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
          {tr.hero.role}
        </p>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
          {tr.hero.tagline}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-7 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 w-full sm:w-auto text-center"
          >
            {tr.hero.ctaWork}
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-all hover:-translate-y-0.5 w-full sm:w-auto text-center"
          >
            {tr.hero.ctaContact}
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-indigo-500 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  )
}

export default Hero
