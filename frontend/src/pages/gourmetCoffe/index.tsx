import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { DifCoffe } from './DifCoffe'
import { Frequents } from './Frequents'
import { Introduction } from './Introduction'
import { GourmetCoffeWrapper } from './style'
import { Warning } from './Warning'

type Props = {
  toggleTheme(): void
}
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function GoToTop() {
  const routePath = useLocation()
  const onTop = () => {
    window.scrollTo(0, 0)
  }
  useEffect(() => {
    onTop()
  }, [routePath])

  return null
}

export function GourmetCoffe({ toggleTheme }: Props) {
  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <GourmetCoffeWrapper>
        <Introduction />
        <DifCoffe />
        <Warning />
        <Frequents />
      </GourmetCoffeWrapper>
      <Footer />
    </>
  )
}
