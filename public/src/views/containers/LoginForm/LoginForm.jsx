// @flow

import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;

  margin: 20px auto;
  border: 1px solid #aaa;
  padding: 40px;
  width: 300px;
`

const Input = styled.input`
  margin-bottom: 5px;
`

type Props = {
  name: string,
  password: string,
  handleName: Function,
  handlePassword: Function
}

const LoginForm = ({
  name,
  handleName,
  password,
  handlePassword
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
    { /* TODO */ }
    <button
      type='submit'
      onClick={() => console.log('clicked')}
    >
      Login
    </button>
  </Wrapper>
)

export default LoginForm
