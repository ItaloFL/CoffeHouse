import { useElementOnScreen } from '../../../utils/useElementOnScreen'
import { TestDetail } from '../style'
import { StatsDescription, StatsItem, StatsList, StatsTitle } from './style'

export function Stats() {
  const [elementRef, isVisible] = useElementOnScreen()

  return (
    <StatsList ref={elementRef} className={isVisible ? 'visible' : undefined}>
      <StatsItem>
        <StatsTitle>20k+</StatsTitle>
        <StatsDescription>Sacas por mês</StatsDescription>
      </StatsItem>
      <TestDetail />
      <StatsItem>
        <StatsTitle>400 +</StatsTitle>
        <StatsDescription>Funcionários</StatsDescription>
      </StatsItem>
      <TestDetail />
      <StatsItem>
        <StatsTitle>20+</StatsTitle>
        <StatsDescription>Plantios de café</StatsDescription>
      </StatsItem>
    </StatsList>
  )
}
