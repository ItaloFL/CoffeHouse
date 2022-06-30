import { Envelope, LockSimple, Phone, User } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Title } from '../../components/Title'
import {
  FormSignUp,
  InputDiv,
  InputItem,
  SignUpInputs,
  SignUpLink,
  SignUpWrapper,
  TextCoffe,
  TextSignUp
} from './style'

export function SignUp() {
  return (
    <>
      <SignUpWrapper>
        <FormSignUp>
          <Title Text="Crie sua conta" fontSize="24px" maxWidth="180px" />
          <SignUpInputs>
            <InputItem>
              <InputDiv>
                <User
                  className="icon"
                  size={19}
                  weight="fill"
                  color="#297DF9"
                />
                <Input name="name" type="text" placeholder="Nome Completo" />
              </InputDiv>
            </InputItem>
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
                <Phone
                  className="icon"
                  size={19}
                  weight="fill"
                  color="#297DF9"
                />
                <Input name="telefone" type="text" placeholder="Seu Telefone" />
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
                <Input
                  name="password"
                  type="password"
                  placeholder="Sua Senha"
                />
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
                <Input
                  name="password"
                  type="password"
                  placeholder="Confirme sua senha"
                />
              </InputDiv>
            </InputItem>
            <Button text="Cadastrar" margin="35px -10px" />
          </SignUpInputs>
        </FormSignUp>
        <TextSignUp>
          <Title
            Text="Venha e conheça o melhor do café."
            fontSize="48px"
            maxWidth="369px"
          />
          <TextCoffe>Junte-se a nós e confira os melhores cafés</TextCoffe>
          <SignUpLink>
            Já tem conta?
            <Link to="/signin" className="link">
              Ir Para Login
            </Link>
          </SignUpLink>
        </TextSignUp>
      </SignUpWrapper>
    </>
  )
}
