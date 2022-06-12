import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Introduction } from './components/Home/Introduction'
import { GlobalStyles } from './styles/globalStyles'

export function App() {
  return (
    <>
      <Header />
      <Home />
      <GlobalStyles />
      <Footer />
    </>
  )
}
