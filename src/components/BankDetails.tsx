import React, { useState } from 'react'
import { CreditCard, DollarSign, Copy, Check } from 'lucide-react'

const BankDetails: React.FC = () => {
  const [copied, setCopied] = useState(false)

  const bankDetails = {
    accountNumber: 'XXXX-XXXX-XXXX-1234',
    routingNumber: '123456789'
  }

  const copyToClipboard = () => {
    const detailsText = `Account Number: ${bankDetails.accountNumber}\nRouting Number: ${bankDetails.routingNumber}`
    navigator.clipboard.writeText(detailsText).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section id="bank" className="mb-12">
      <h2 className="text-3xl font-bold mb-4 text-blue-400">Bank Transfer Details</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex items-center mb-4">
          <CreditCard className="w-6 h-6 mr-2 text-blue-400" />
          <p>Account Number: {bankDetails.accountNumber}</p>
        </div>
        <div className="flex items-center mb-4">
          <DollarSign className="w-6 h-6 mr-2 text-blue-400" />
          <p>Routing Number: {bankDetails.routingNumber}</p>
        </div>
        <button
          onClick={copyToClipboard}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-2" />
              Copy to Clipboard
            </>
          )}
        </button>
        <p className="text-sm text-gray-400 mt-2">Please contact for full bank details</p>
      </div>
    </section>
  )
}

export default BankDetails