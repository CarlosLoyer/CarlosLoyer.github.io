import React from 'react'
import { Briefcase, GraduationCap, Award } from 'lucide-react'

const ProfessionalInfo: React.FC = () => {
  return (
    <section id="professional" className="mb-12">
      <h2 className="text-3xl font-bold mb-4 text-blue-400">Información Profesional</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex items-center mb-4">
          <Briefcase className="w-6 h-6 mr-2 text-blue-400" />
          <p>Fullstack Developer en Centro Médico del Trabajador</p>
        </div>
        <div className="flex items-center mb-4">
          <GraduationCap className="w-6 h-6 mr-2 text-blue-400" />
          <p>Ingeniero Licenciado en Informática</p>
        </div>
        <div className="flex items-center">
          <Award className="w-6 h-6 mr-2 text-blue-400" />
          <p>Diplomado en Data Science</p>
        </div>
      </div>
    </section>
  )
}

export default ProfessionalInfo