import React from 'react'
import styles from './LoginButton.module.scss'

const AUTH_URI = 'https://accounts.spotify.com/authorize'
const CLIENT_ID = '7c88e99ea1af436b8d3467c587b27e85'
const RESPONSE_TYPE = 'token'
const REDIRECT_URI = 'http://localhost:3000'

const LoginButton: React.FC = () => {
  const handleLogin = (): void => {
    window.location.replace(`${AUTH_URI}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`)
  }

  return (
    <div className={styles.login}>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginButton
