export type PropsTitle = {
  fontSize: string
  Text: string
  maxWidth: string
}

export function Title({ fontSize, Text, maxWidth }: PropsTitle) {
  return <h1 style={{ fontSize, color: '#FFFFFF', maxWidth, margin: '0 auto', fontWeight: 'bold', marginBottom: '40px' }}>{Text}</h1>
}
