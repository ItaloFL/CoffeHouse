import { TitleText } from './style'

export type PropsTitle = {
  fontSize: string
  Text: string
  maxWidth: string
}

export function Title({ fontSize, Text, maxWidth }: PropsTitle) {
  return (
    <TitleText
      style={{
        fontSize,
        maxWidth,
        margin: '0 auto',
        fontWeight: 'bold',
        marginBottom: '40px'
      }}
    >
      {Text}
    </TitleText>
  )
}
