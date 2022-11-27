import { Home } from './components/Home'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/globalStyles'
import { SignUp } from './pages/signup'
import { SignIn } from './pages/signin'
import { light } from './styles/theme/light'
import { dark } from './styles/theme/dark'
import usePersistedTheme from './utils/usePersistedTheme'
import { TradicionalCoffe } from './pages/tradicionalCoffe'
import { GourmetCoffe } from './pages/gourmetCoffe'
import { ExtraForteCoffe } from './pages/extraForteCoffe'

export function App() {
  const [theme, setTheme] = usePersistedTheme('theme', light)

  const toggleTheme = () => {
    setTheme(theme.name === 'light' ? dark : light)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<Home toggleTheme={toggleTheme} />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="tradicional" element={<TradicionalCoffe toggleTheme={toggleTheme} />} />
            <Route path="gourmet" element={<GourmetCoffe toggleTheme={toggleTheme} />} />
            <Route path="extraforte" element={<ExtraForteCoffe toggleTheme={toggleTheme} />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}
