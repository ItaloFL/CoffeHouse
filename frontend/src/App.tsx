import { Home } from './components/Home'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/globalStyles'
import { SignUp } from './pages/signup'
import { SignIn } from './pages/signin'
import { light } from './styles/theme/light'
import { dark } from './styles/theme/dark'

export function App() {
  return (
    <>
      <ThemeProvider theme={dark}>
        <BrowserRouter>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}
