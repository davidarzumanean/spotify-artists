const manager = {}

manager.setItem = (name, value, seconds) => {
  let expires = ''
  if (seconds) {
    const date = new Date()
    date.setTime(date.getTime() + seconds * 1000 * 60)
    expires = `; expires=${date.toUTCString()}`
  }
  document.cookie = `${name}=${value || ''}${expires}; path=/`
}

manager.getItem = name => {
  const nameEQ = `${name}=`
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

manager.eraseCookie = name => {
  document.cookie = `${name}=; Max-Age=-99999999;`
}

export default manager
