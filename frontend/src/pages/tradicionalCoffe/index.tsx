import { Detail, TradicionalCoffeWrapper } from './style'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { AboutCoffe } from './AboutCoffe'
import { Depoiments } from './Depoiments'
import { Stats } from './Stats'
import { Process } from './Process'
import { Frequents } from './Frequents'

type Props = {
  toggleTheme(): void
}

export function TradicionalCoffe({ toggleTheme }: Props) {
  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <TradicionalCoffeWrapper>
        <AboutCoffe />
        <Depoiments />
        <Detail />
        <Process />
        <Stats />
        <Detail />
        <Frequents />
        <Footer />
      </TradicionalCoffeWrapper>
    </>
  )
}
