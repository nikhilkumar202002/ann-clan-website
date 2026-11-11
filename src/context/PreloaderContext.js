import { createContext, useContext } from 'react'

export const PreloaderContext = createContext({
  isLoaded: false,
  setIsLoaded: () => {},
})

export const usePreloader = () => useContext(PreloaderContext)

