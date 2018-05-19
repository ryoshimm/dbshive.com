import styled from 'styled-components'


export const Column = styled.div`
  width: 100%;
  height: 10rem;
  background-color: #334;
  transition: background-color 0.2s linear;
  &:hover {
    transition: background-color 0.4s linear;
    background-color: palevioletred;
  }

  @media screen and (min-width : 50rem) {
    width: 16rem;
    height: 100vh;
  }
`

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 20rem;
  height: 5rem;
  margin: auto;
  font-size: 2rem;
`

export const HeaderTitle = styled.p`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  font-family: Impact;
  font-size: 2.6rem;
  color: white;
  text-align: center;
`

export const Title = styled.p`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  font-family: arial;
  font-size: 2.6rem;
  color: white;
  text-align: center;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
  margin: 10rem 0 0 0;

  @media screen and (min-width : 50rem) {
    flex-direction: row;
    margin: 0;
  }
`

export const WrapperTitle = styled.div`
  position: relative;
  height: 62%;

  @media screen and (min-width : 50rem) {
    height: 30%;
  }
`
