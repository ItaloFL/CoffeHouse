import { Coffe } from '../Coffes'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { Introduction } from './Introduction'
import { MethodCoffe } from './MethodCoffe'

type Props = {
  toggleTheme(): void
}

export function Home({ toggleTheme }: Props) {
  return (
    <>
      <Header toggleTheme={toggleTheme}/>
      <Introduction />
      <Coffe />
      <MethodCoffe />
      <Footer />
    </>
  )
}
