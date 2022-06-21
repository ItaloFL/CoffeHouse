import { ButtonStyle } from './style'

export type ButtonProps = {
  text: string
  margin?: string
}

export function Button({ text, margin }: ButtonProps) {
  return <ButtonStyle style={{ margin }}>{text}</ButtonStyle>
}
