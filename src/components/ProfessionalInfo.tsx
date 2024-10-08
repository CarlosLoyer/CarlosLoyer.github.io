import React from 'react'
import { Briefcase, GraduationCap, Award } from 'lucide-react'

const ProfessionalInfo: React.FC = () => {
  return (
    <section id="professional" className="mb-12">
      <h2 className="text-3xl font-bold mb-4 text-blue-400">Professional Information</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex items-center mb-4">
          <Briefcase className="w-6 h-6 mr-2 text-blue-400" />
          <p>Senior Software Engineer at Tech Solutions Inc.</p>
        </div>
        <div className="flex items-center mb-4">
          <GraduationCap className="w-6 h-6 mr-2 text-blue-400" />
          <p>M.S. in Computer Science, Stanford University</p>
        </div>
        <div className="flex items-center">
          <Award className="w-6 h-6 mr-2 text-blue-400" />
          <p>Certified AWS Solutions Architect</p>
        </div>
      </div>
    </section>
  )
}

export default ProfessionalInfo