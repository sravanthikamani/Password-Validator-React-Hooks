// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
`
export const PasswordContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Heading = styled.h1`
  font-size: 25px;
  font-weight: bold;
  font-family: 'Roboto';
  color: #ffffff;
`
export const Description = styled.p`
  font-size: 15px;
  font-weight: bold;
  font-family: 'Roboto';
  color: #f8fafc;
`
export const InputContainer = styled.input`
  height: 40px;
  width: 90%;
  border-radius: 5px;
  background-color: #edeeff;
`
export const ErrorMsg = styled.p`
  font-size: 15px;
  font-weight: bold;
  font-family: 'Roboto';
  color: #ef4444;
  margin-top: 0px;
`