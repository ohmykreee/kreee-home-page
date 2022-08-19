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

export const CardAnimation = ({ children }) => {
  return (
    <motion.div
      style={{opacity: 0}}
      transition={{delay: 0.3}}
      animate={{
        scale: [0.9, 1],
        opacity: 1
      }}>
      {children}
    </motion.div>
  )
}

export const PageTrasition = ({ children }) => {
  return (
    <motion.div
      style={{opacity: 0}}
      // initial={false}
      animate={{
        translateY: [100, 0],
        opacity: 1
      }}>
      {children}
    </motion.div>
  )
}