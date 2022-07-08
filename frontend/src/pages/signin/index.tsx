import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { FormWrapper, InputDiv, InputWrapper, SignInText, SignInWrapper, SignUpText } from './style'
import { Link } from 'react-router-dom'
import { Envelope, LockSimple } from 'phosphor-react'
import { InputItem } from '../signup/style'

export function SignIn() {
  return (
    <>
      <SignInWrapper>
        <SignInText>Faça seu login em nossa plataforma</SignInText>
        <FormWrapper>
          <InputWrapper>
            <InputItem>
              <InputDiv>
                <Envelope className="icon" size={19} weight="fill" color="#297DF9" />
                <Input
                  name="email"
                  type="email"
                  placeholder="Seu E-mail"
                />
              </InputDiv>
            </InputItem>
            <InputItem>
              <InputDiv>
                <LockSimple className="icon" size={19} weight="fill" color="#297DF9" />
                <Input
                  name="password"
                  type="password"
                  placeholder="Sua Senha"
                />
              </InputDiv>
            </InputItem>
          </InputWrapper>
          <Button text="Entrar" margin="15px 0" />
          <SignUpText>
            Não tem conta?
            <Link to="/signup" className="link">Registre-se</Link>
          </SignUpText>
        </FormWrapper>
      </SignInWrapper>
    </>
  )
}
