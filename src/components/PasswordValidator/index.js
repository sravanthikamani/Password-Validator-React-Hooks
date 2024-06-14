// Write your code here
import {useState} from 'react'
import {
  AppContainer,
  PasswordContainer,
  Description,
  Heading,
  ErrorMsg,
  InputContainer,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  //   const [isDisplay, setDisplay] = useState(false)
  const onChangeInput = event => {
    setPassword(event.target.value)
  }
  const IsDisplay =
    password.length < 8 && 'Your password must be at least 8 characters'
  return (
    <AppContainer>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <Description>Check how strong and secure is your password</Description>
        <InputContainer
          type="password"
          onChange={onChangeInput}
          value={password}
        />

        <ErrorMsg>{IsDisplay}</ErrorMsg>
      </PasswordContainer>
    </AppContainer>
  )
}
export default PasswordValidator