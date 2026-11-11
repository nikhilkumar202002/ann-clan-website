import { PreloaderProvider } from './context/PreloaderProvider'
import Preloader from './components/ui/Preloader'
import Layout from './components/layout/Layout'
import Homepage from './pages/Homepage'

const App = () => {
  return (
    <PreloaderProvider>
      <Preloader />
      <Layout>
        <Homepage />
      </Layout>
    </PreloaderProvider>
  )
}

export default App
