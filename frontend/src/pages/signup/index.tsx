import { Link } from "react-router-dom"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Title } from "../../components/Title"
import { FormSignUp, SignUpLink, SignUpWrapper, TextCoffe, TextSignUp } from "./style"




export function SignUp(){
  return (
    <>
      <SignUpWrapper>
        <FormSignUp>
          <Title Text="Crie sua conta" fontSize="24px" maxWidth="180px"/>
          <Input name="name" type="text" placeholder="Nome Completo"/>
          <Input name="email" type="email" placeholder="Seu E-mail"/>
          <Input name="telefone" type="text" placeholder="Seu Telefone"/>
          <Input name="password" type="password" placeholder="Sua Senha"/>
          <Input name="password" type="password" placeholder="Confirme sua senha"/>
          <Button text="Cadastrar" margin="35px -10px"/>
        </FormSignUp>
        <TextSignUp>
          <Title Text="Venha e conheça o melhor do café." fontSize="48px" maxWidth="369px"/>
          <TextCoffe>Junte-se a nós e confira os melhores cafés</TextCoffe>
          <SignUpLink>
            Já tem conta?
            <Link  to="/signin" className="link">Ir Para Login</Link>
          </SignUpLink>
        </TextSignUp>
      </SignUpWrapper>
    </>
  )
}