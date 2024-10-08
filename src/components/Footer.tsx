import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2024 John Doe. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-blue-300"><Github className="w-6 h-6" /></a>
          <a href="#" className="text-white hover:text-blue-300"><Linkedin className="w-6 h-6" /></a>
          <a href="#" className="text-white hover:text-blue-300"><Twitter className="w-6 h-6" /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer