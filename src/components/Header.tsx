import React from 'react'
import { Link } from 'react-router-dom'
import { User } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-blue-900 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <User className="w-8 h-8 mr-2" />
          <h1 className="text-2xl font-bold">Carlos Loyer</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
            <li><Link to="/bank-details" className="hover:text-blue-300">Bank Details</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header