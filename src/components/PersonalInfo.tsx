import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const PersonalInfo: React.FC = () => {
  return (
    <section id="personal" className="mb-12">
      <h2 className="text-3xl font-bold mb-4 text-blue-400">Información Personal</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex items-center mb-4">
          <Mail className="w-6 h-6 mr-2 text-blue-400" />
          <p>me@carlosloyer.cl</p>
        </div>
        <div className="flex items-center mb-4">
          <Phone className="w-6 h-6 mr-2 text-blue-400" />
          <p></p>
        </div>
        <div className="flex items-center">
          <MapPin className="w-6 h-6 mr-2 text-blue-400" />
          <p>Chile</p>
        </div>
      </div>
    </section>
  )
}

export default PersonalInfo