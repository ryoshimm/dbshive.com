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


const Top = (props) => {
  const handleTransitionScreen = (path) => {
    props.history.push(path)
  }

  return (
    <div>
      <Header>
        <HeaderTitle>
          DBSHIVE
        </HeaderTitle>
      </Header>

      <Wrapper>
        <Column onClick={() => handleTransitionScreen('/product')}>
          <WrapperTitle>
            <Title>Product</Title>
          </WrapperTitle>
        </Column>

        <Column onClick={() => handleTransitionScreen('/about')}>
          <WrapperTitle>
            <Title>About</Title>
          </WrapperTitle>
        </Column>
      </Wrapper>
    </div>
  )
}

export default Top
