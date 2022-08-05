import { Coffe } from '../Coffes'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { Introduction } from './Introduction'
import { MethodCoffe } from './MethodCoffe'

export function Home() {
  return (
    <>
      <Header/>
      <Introduction />
      <Coffe/>
      <MethodCoffe />
      <Footer />
    </>
  )
}
