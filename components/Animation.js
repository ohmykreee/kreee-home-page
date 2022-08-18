import { motion } from 'framer-motion'

export const ButtonAnimation = ({ children }) => {
  return (
    <motion.div
      transition={{duration: 0.2}}
      whileHover={{
        translateY: -5
      }}>
      {children}
    </motion.div>
  )
}