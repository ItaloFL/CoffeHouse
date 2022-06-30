import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { FormWrapper, SignInText, SignInWrapper, SignUpText } from './style'
import { Link } from 'react-router-dom'
import { Envelope, LockSimple } from 'phosphor-react'
import { InputDiv, InputItem } from '../signup/style'

export function SignIn() {
  return (
    <>
      <SignInWrapper>
        <SignInText>Faça seu login em nossa plataforma</SignInText>
        <FormWrapper>
          <InputItem>
            <InputDiv>
              <Envelope size={12} weight="fill" />
              <Input
                name="email"
                type="email"
                placeholder="Seu E-mail"
                value=""
              />
            </InputDiv>
          </InputItem>
          <InputDiv>
            <InputItem>
              <LockSimple size={12} weight="fill" />
              <Input
                name="password"
                type="password"
                placeholder="Sua Senha"
                value=""
              />
            </InputItem>
          </InputDiv>
          <Button text="Entrar" margin="15px 0" />
          <SignUpText>
            Não tem conta?
            <Link to="/signup">Registre-se</Link>
          </SignUpText>
        </FormWrapper>
      </SignInWrapper>
    </>
  )
}
