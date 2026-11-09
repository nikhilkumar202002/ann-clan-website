import Header from './Header'
import Footer from './Footer'
import LenisScroll from '../ui/LenisScroll'

const Layout = ({ children }) => {
  return (
    <LenisScroll>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </LenisScroll>
  )
}

export default Layout