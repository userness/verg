import { useState } from 'react'
import { motion } from 'framer-motion'

function App() {
  const [isVerifying, setIsVerifying] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const [code, setCode] = useState('')
  const correctCode = 'ABC123'

  const handleVerify = () => {
    if (code === correctCode) {
      setIsVerified(true)
      setIsVerifying(false)
    } else {
      alert('Incorrect code')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800 rounded-xl p-8 max-w-md w-full shadow-2xl border border-gray-700"
      >
        <div className="flex items-center gap-4 mb-6">
          <div 
            className="w-6 h-6 rounded border-2 border-blue-500 flex items-center justify-center cursor-pointer"
            onClick={() => !isVerified && setIsVerifying(true)}
          >
            {isVerified && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-4 h-4 bg-blue-500 rounded-sm"
              />
            )}
          </div>
          <span className="text-white">I agree to the terms</span>
        </div>

        {isVerifying && !isVerified && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <label className="text-gray-300 text-sm">Verification Code: {correctCode}</label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                placeholder="Enter verification code"
              />
            </div>
            <button
              onClick={handleVerify}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded py-2 transition-colors"
            >
              Verify
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default App