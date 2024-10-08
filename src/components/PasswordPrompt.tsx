import React, { useState } from 'react'
import { Lock } from 'lucide-react'

interface PasswordPromptProps {
  onCorrectPassword: () => void
}

const PasswordPrompt: React.FC<PasswordPromptProps> = ({ onCorrectPassword }) => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you'd want to hash this password and compare it securely
    if (password === 'showme') {
      onCorrectPassword()
    } else {
      setError('Incorrect password. Please try again.')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex items-center justify-center mb-6">
          <Lock className="w-12 h-12 text-blue-400" />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-400">Ingrese contraseña</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
            placeholder="Ingrese contraseña"
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default PasswordPrompt