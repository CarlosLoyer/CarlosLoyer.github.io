import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProtectedBankDetails from './pages/ProtectedBankDetails'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Reader from './pages/Reader'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bank-details/*" element={<ProtectedBankDetails />} />
            <Route path="/read" element={<Reader />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App