import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import {
  FormWrapper,
  InputDiv,
  InputWrapper,
  SignInText,
  SignInWrapper,
  SignUpText
} from './style'
import { Link } from 'react-router-dom'
import { Envelope, Eye, EyeSlash, LockSimple } from 'phosphor-react'
import { InputItem, PasswordDiv } from '../signup/style'
import { useState } from 'react'

export function SignIn() {
  const [visiblePassword, setVisiblePassword] = useState(false)

  function toggleVisiblePassoword() {
    setVisiblePassword(!visiblePassword)
  }

  return (
    <>
      <SignInWrapper>
        <SignInText>Faça seu login em nossa plataforma</SignInText>
        <FormWrapper>
          <InputWrapper>
            <InputItem>
              <InputDiv>
                <Envelope
                  className="icon"
                  size={19}
                  weight="fill"
                  color="#297DF9"
                />
                <Input name="email" type="email" placeholder="Seu E-mail" />
              </InputDiv>
            </InputItem>
            <InputItem>
              <InputDiv>
                <LockSimple
                  className="icon"
                  size={19}
                  weight="fill"
                  color="#297DF9"
                />
                <PasswordDiv>
                  <Input
                    name="password"
                    type={visiblePassword ? 'text' : 'password'}
                    placeholder="Sua Senha"
                  />
                  <button
                    className="button-eye"
                    onClick={toggleVisiblePassoword}
                  >
                    {visiblePassword ? (
                      <EyeSlash size={19} weight="fill" color="#144EA5" />
                    ) : (
                      <Eye size={19} weight="fill" color="#297DF9" />
                    )}
                  </button>
                </PasswordDiv>
              </InputDiv>
            </InputItem>
          </InputWrapper>
          <Button text="Entrar" margin="15px 0" />
          <SignUpText>
            Não tem conta?
            <Link to="/signup" className="link">
              Registre-se
            </Link>
          </SignUpText>
        </FormWrapper>
      </SignInWrapper>
    </>
  )
}
