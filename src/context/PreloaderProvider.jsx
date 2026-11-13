import { useState } from 'react'
import { PreloaderContext } from './PreloaderContext'

export const PreloaderProvider = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPreloaderComplete, setIsPreloaderComplete] = useState(false)

  return (
    <PreloaderContext.Provider
      value={{
        isLoaded,
        setIsLoaded,
        isPreloaderComplete,
        setIsPreloaderComplete,
      }}
    >
      {children}
    </PreloaderContext.Provider>
  )
}
