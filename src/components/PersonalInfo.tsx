import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const PersonalInfo: React.FC = () => {
  return (
    <section id="personal" className="mb-12">
      <h2 className="text-3xl font-bold mb-4 text-blue-400">Personal Information</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex items-center mb-4">
          <Mail className="w-6 h-6 mr-2 text-blue-400" />
          <p>john.doe@example.com</p>
        </div>
        <div className="flex items-center mb-4">
          <Phone className="w-6 h-6 mr-2 text-blue-400" />
          <p>+1 (555) 123-4567</p>
        </div>
        <div className="flex items-center">
          <MapPin className="w-6 h-6 mr-2 text-blue-400" />
          <p>New York City, NY</p>
        </div>
      </div>
    </section>
  )
}

export default PersonalInfo