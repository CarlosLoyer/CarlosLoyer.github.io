import React, { useState } from 'react'
import PasswordPrompt from '../components/PasswordPrompt'
import BankDetails from './BankDetails'

const ProtectedBankDetails: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  if (!isAuthenticated) {
    return <PasswordPrompt onCorrectPassword={() => setIsAuthenticated(true)} />
  }

  return <BankDetails />
}

export default ProtectedBankDetails