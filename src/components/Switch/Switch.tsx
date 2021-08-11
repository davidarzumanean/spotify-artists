import React from 'react'
import styles from './Switch.module.scss'

type SwitchProps = {
  handleChange: () => void,
  className?: string
}

const Switch: React.FC<SwitchProps> = ({ handleChange, className = '' }) => {
  return (
    <label className={`${styles.switchContainer} ${className}`}>
      <input type="checkbox" onChange={handleChange} /> 
      <div className={styles.switchToggle} />
    </label>
  )
}

export default Switch
