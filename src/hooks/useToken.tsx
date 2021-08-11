import { useState, useEffect } from 'react';
import CookieManager from '../helpers/cookie-manager'

type queryParamsType = {
  access_token?: string,
  expires_in?: string,
  token_type?: string,
}

const useToken = () => {
  const [token, setToken] = useState<string | undefined>('');

  useEffect(() => {
    const hash = window.location.hash

    const tokenCookie = CookieManager.getItem('token')

    if (tokenCookie) {
      setToken(tokenCookie)
      return
    }

    if (hash) {
      const urlSearchParams = new URLSearchParams(window.location.hash.slice(1))
      const queryParams: queryParamsType = Object.fromEntries(urlSearchParams.entries())
      const cookieExpiration: string = queryParams.expires_in || '3600'
  
      CookieManager.setItem('token', queryParams.access_token, +cookieExpiration / 60)
      window.location.replace(window.location.href.split('#')[0])

      setToken(queryParams.access_token)
    }
  }, [])

  return token
}

export default useToken