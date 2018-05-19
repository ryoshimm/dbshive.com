import React from 'react'

// styles
import {
  Column,
  Header,
  HeaderTitle,
  Title,
  Wrapper,
  WrapperTitle,
} from './styles'


const Top = () => {
  return (
    <div>
      <Header>
        <HeaderTitle>
          DBSHIVE
        </HeaderTitle>
      </Header>

      <Wrapper>
        <a href='/product'>
          <Column>
            <WrapperTitle>
              <Title>Product</Title>
            </WrapperTitle>
          </Column>
        </a>

        <a href='/about'>
          <Column>
            <WrapperTitle>
              <Title>About</Title>
            </WrapperTitle>
          </Column>
        </a>
      </Wrapper>
    </div>
  )
}

export default Top
