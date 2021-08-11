import React, { useState } from 'react'
import SearchPage from './components/SearchPage/SearchPage'
import Switch from './components/Switch/Switch'
import ArtistsContextProvider from './services/contexts/ArtistsContext'

enum Directions {
  LTR = 'ltr',
  RTL = 'rtl',
}

const App = () => {
  const [dir, setDir] = useState(Directions.LTR)

  const toggleDir = (): void => {
    setDir(dir === Directions.LTR ? Directions.RTL : Directions.LTR)
  }

  return (
    <div className="App" dir={dir}>
      <Switch handleChange={toggleDir} className="dir-toggle" />

      <ArtistsContextProvider>
        <SearchPage />
      </ArtistsContextProvider>
    </div>
  )
}

export default App
