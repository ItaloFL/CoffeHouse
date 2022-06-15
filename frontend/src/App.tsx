import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles/globalStyles'
import { SignUp } from './pages/SignIn'
import { SignIn } from './pages/SignUp'

export function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <GlobalStyles />
        <Footer />
      </BrowserRouter>
    </>
  )
}
