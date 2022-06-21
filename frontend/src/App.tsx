import { Home } from './components/Home'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles/globalStyles'
import { SignUp } from './pages/signup'
import { SignIn } from './pages/signin'

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <GlobalStyles />
      </BrowserRouter>
    </>
  )
}
