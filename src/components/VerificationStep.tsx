import { motion } from 'framer-motion'

interface VerificationStepProps {
  stepNumber: number
  isActive: boolean
  title: string
  description: string
  onClick: () => void
}

export default function VerificationStep({
  stepNumber,
  isActive,
  title,
  description,
  onClick
}: VerificationStepProps) {
  return (
    <motion.div
      whileHover={{ scale: isActive ? 1.02 : 1 }}
      className={`rounded-lg p-4 cursor-pointer transition-all duration-300 ${
        isActive 
          ? 'bg-gray-700 shadow-lg' 
          : 'bg-gray-900 opacity-50'
      }`}
      onClick={isActive ? onClick : undefined}
    >
      <div className="flex items-center gap-4">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
          isActive ? 'bg-blue-500' : 'bg-gray-600'
        }`}>
          <span className="text-white font-medium">{stepNumber}</span>
        </div>
        
        <div>
          <h3 className="text-white font-semibold">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}