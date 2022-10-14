import { TitleText } from './style'

export type PropsTitle = {
  Text: string
}

export function Title({ Text }: PropsTitle) {
  return (
    <TitleText
      style={{
        margin: '0 auto',
        fontWeight: 'bold',
        marginBottom: '40px'
      }}
    >
      {Text}
    </TitleText>
  )
}
