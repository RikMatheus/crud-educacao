import styled from 'styled-components'

import Login from './Login'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <>
      <Login />
    </>
  )
}
