import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { FormWrapper, SignInText, SignInWrapper, SignUpText } from './style'
import { Link } from 'react-router-dom'

export function SignIn() {
  return (
    <>
      <SignInWrapper>
        <SignInText>Faça seu login em nossa plataforma</SignInText>
        <FormWrapper>
          <Input name="email" type="email" placeholder="Seu E-mail" value="" />
          <Input
            name="password"
            type="password"
            placeholder="Sua Senha"
            value=""
          />
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
