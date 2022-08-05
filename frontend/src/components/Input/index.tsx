import { InputHTMLAttributes } from 'react'
import { InputWrapper } from './style'

export function Input({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <InputWrapper>
      <input className='input' {...props} />
    </InputWrapper>
  )
}
