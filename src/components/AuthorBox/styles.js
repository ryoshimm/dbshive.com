import styled from 'styled-components'


export const Container = styled.div`
  margin: 0 1.5rem 0 1rem;
`

export const Image = styled.img`
  border-radius: 1rem;
  object-fit: cover;
`

export const StyledMessage = styled.p`
  margin: 0 0.3rem;
  font-size: 0.85rem;
`

export const StyledAuthorBox = styled.li.attrs({
  width: props => props.width || '28rem'
})`
  position: relative;
  width: ${props => props.width};
  min-height: 20rem;
  margin: 2rem 2rem;
  padding: 1rem 1rem 1rem 1rem;
  border-radius: 1rem;
  background-color: #c2bbbb;
  color: #333;
  word-wrap: break-word;
`

export const StyledDescription = styled.div`
  margin: 1.5rem 0.5rem;
`

export const StyledName = styled.h3`
  margin: 0 1rem 0 0;
  font-size: 2rem;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
`

export const WrapperContents = styled.div`
  margin: 0 0 3rem 0;
`
