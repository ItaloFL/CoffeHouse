import { ButtonStyle } from './style'

export type ButtonProps = {
  text: string
}

export function Button({ text }: ButtonProps) {
  return <ButtonStyle>{text}</ButtonStyle>
}
