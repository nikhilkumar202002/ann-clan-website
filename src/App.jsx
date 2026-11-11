import { BrowserRouter } from 'react-router-dom'
import { PreloaderProvider } from './context/PreloaderProvider'
import Preloader from './components/ui/Preloader'
import Layout from './components/layout/Layout'
import Routes from './routes/Routes'
import ScrollToTop from './components/ui/ScrollToTop'

const App = () => {
  return (
    <BrowserRouter>
      <PreloaderProvider>
        <Preloader />
        <ScrollToTop />
        <Layout>
          <Routes />
        </Layout>
      </PreloaderProvider>
    </BrowserRouter>
  )
}

export default App
