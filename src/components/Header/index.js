import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'


const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0 2rem 0;
`

const WrapperItem = styled.div`
  display: flex;
  flex-direction: columns;
  margin: 0.5rem auto 0 auto;
`

const StyledItem = styled.div.attrs({
  bg: props => props.bg,
  width: props => props.width || '7rem',
})`
  width: ${props => props.width};
  height: 3rem;
  background-color: ${props => props.bg};
  text-align: center;
  transition: background-color 0.2s linear;

  &:hover {
    transition: background-color 0.4s linear;
    background-color: palevioletred;
  }
`

const StyledHeaderTitle = styled.h1`
  margin: 0 6rem 1.5rem 2rem;
  font-size: 2.4rem;
`

const StyledTitle = styled.h3`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0.7rem 0 0 0;
  font-family: arial;
  font-size: 1.3rem;
  color: white;
  text-align: center;
`

const WrapperTitle = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`


const Header = (props) => {
  const { select } = props

  const handleTrasitionScreen = (path) => {
    props.history.push(path)
  }

  return (
    <Wrapper>
      <StyledHeaderTitle>{select}</StyledHeaderTitle>

      <WrapperItem>
          <StyledItem
            onClick={() => handleTrasitionScreen('/')}
          >
            <WrapperTitle>
              <StyledTitle>Top</StyledTitle>
            </WrapperTitle>
          </StyledItem>

          <StyledItem
            bg={select === 'Product' ? '#3aa' : '#334'}
            onClick={() => handleTrasitionScreen('/product')}
          >
            <WrapperTitle>
              <StyledTitle>Product</StyledTitle>
            </WrapperTitle>
          </StyledItem>

          <StyledItem
            bg={select === 'About' ? '#3aa' : '#334'}
            onClick={() => handleTrasitionScreen('/about')}
          >
            <WrapperTitle>
              <StyledTitle>About</StyledTitle>
            </WrapperTitle>
          </StyledItem>

          <StyledItem
            width='10rem'
            bg={select === 'Collaborator' ? '#3aa' : '#334'}
            onClick={() => handleTrasitionScreen('/collaborator')}
          >
            <WrapperTitle>
              <StyledTitle>Collaborator</StyledTitle>
            </WrapperTitle>
          </StyledItem>
      </WrapperItem>
    </Wrapper>
  )
}

export default withRouter(Header)
