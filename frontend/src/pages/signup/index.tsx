import {
  Envelope,
  LockSimple,
  Phone,
  User,
  Eye,
  EyeSlash
} from 'phosphor-react'
import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Title } from '../../components/Title'
import {
  FormSignUp,
  InputDiv,
  InputItem,
  PasswordDiv,
  SignUpInputs,
  SignUpLink,
  SignUpWrapper,
  TextCoffe,
  TextSignUp
} from './style'

export function SignUp() {
  const [visiblePassword, setVisiblePassword] = useState(false)
  const [confirmVisiblePassword, setconfirmVisiblePassword] = useState(false)

  function toggleVisiblePassword() {
    setVisiblePassword(!visiblePassword)
  }

  function toggleConfirmPassword() {
    setconfirmVisiblePassword(!confirmVisiblePassword)
  }

  const HandleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.maxLength = 15
    let value = e.currentTarget.value
    value = value.replace(/\D/g, '')
    value = value.replace(/^(\d{2})(\d{5})(\d)/, '($1) $2-$3')
    e.currentTarget.value = value
  }, [])

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
                <Input
                  name="telefone"
                  type="text"
                  placeholder="Seu Telefone"
                  onKeyUp={HandleKeyUp}
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
                <PasswordDiv>
                  <Input
                    name="password"
                    type={visiblePassword ? 'text' : 'password'}
                    placeholder="Sua Senha"
                  />
                  <button
                    className="button-eye"
                    onClick={toggleVisiblePassword}
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
                    type={confirmVisiblePassword ? 'text' : 'password'}
                    placeholder="Confirme sua senha"
                  />
                  <button
                    className="button-eye"
                    onClick={toggleConfirmPassword}
                  >
                    {confirmVisiblePassword ? (
                      <EyeSlash size={19} weight="fill" color="#144EA5" />
                    ) : (
                      <Eye size={19} weight="fill" color="#297DF9" />
                    )}
                  </button>
                </PasswordDiv>
              </InputDiv>
            </InputItem>
            <Button text="Cadastrar" margin="15px -8px" />
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
