// @flow

import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.form`
  display: flex;
  flex-flow: column nowrap;

  margin: 20px auto;
  border: 1px solid #aaa;
  padding: 30px;
  width: 300px;
`

const Input = styled.input`
  margin-bottom: 10px;
`

type Props = {
  name: string,
  password: string,
  handleName: Function,
  handlePassword: Function,
  login: Function
}

const LoginForm = ({
  name,
  handleName,
  password,
  handlePassword,
  login
}: Props) => (
  <Wrapper>
    <Input
      type='text'
      value={name}
      onChange={handleName}
      placeholder='name'
    />
    <Input
      type='text'
      value={password}
      onChange={handlePassword}
      placeholder='password'
    />
    <button
      type='submit'
      onClick={
        (e) => {
          e.preventDefault()
          login(name, password)
        }
      }
    >
      Login
    </button>
  </Wrapper>
)

export default LoginForm
