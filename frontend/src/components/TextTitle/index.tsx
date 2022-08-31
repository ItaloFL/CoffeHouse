import { TitleText } from './style'

type Props = {
  text: string
}

export function TextTitle({ text }: Props) {
  return <TitleText>{text}</TitleText>
}
