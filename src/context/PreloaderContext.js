import { createContext, useContext } from 'react'

export const PreloaderContext = createContext({
  isLoaded: false,
  setIsLoaded: () => {},
  isPreloaderComplete: false,
  setIsPreloaderComplete: () => {},
})

export const usePreloader = () => useContext(PreloaderContext)
