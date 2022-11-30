import { TitleText } from './style'

export type PropsTitle = {
  margin?: string
  Text: string
  fontSize?: string
  maxWidth?: string
  width?: string
  marginBottom?: string
}

export function Title({ Text, fontSize, maxWidth, width, margin, marginBottom}: PropsTitle) {
  return (
    <TitleText
      style={{
        margin: margin ? margin : '0 auto',
        fontWeight: 'bold',
        marginBottom: marginBottom ? marginBottom : '40px',
        fontSize,
        maxWidth,
        width
      }}
    >
      {Text}
    </TitleText>
  )
}
