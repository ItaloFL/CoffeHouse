import { InputWrapper } from "./style"

type InputType = {
  name: string
  type: string
  placeholder?: string
  value?: string
}

export function Input({ name, type, value, placeholder }: InputType) {
  return (
    <InputWrapper>
      <input className="input" type={type} id={name} name={name} value={value} placeholder={placeholder}/>
    </InputWrapper>
  )
}
