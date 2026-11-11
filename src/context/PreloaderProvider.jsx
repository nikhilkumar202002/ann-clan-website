import { useState } from 'react'
import { PreloaderContext } from './PreloaderContext'

export const PreloaderProvider = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <PreloaderContext.Provider value={{ isLoaded, setIsLoaded }}>
      {children}
    </PreloaderContext.Provider>
  )
}

