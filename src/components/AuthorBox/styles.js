import styled from 'styled-components'


export const Container = styled.div`
  margin: 0 1.5rem 0 1rem;
`

export const Image = styled.img`
  border-radius: 1rem;
  object-fit: cover;
`

export const IconImage = styled.img`
  vertical-align:middle;
  width: 1.4rem;
  height: 1.4rem;
  margin: 0 0.4rem 0 0;
  padding: 0 0 0.14rem 0;
  opacity: 0.6;
`

export const StyledAuthorBox = styled.li.attrs({
  width: props => props.width || '33rem'
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
  font-size: 0.85rem;
  list-style-type: disc;
`

export const StyledItem = styled.div`
  width: 14rem;
  margin: 0 2rem 0 0;
`

export const StyledItemTitle = styled.h3`
  margin: 0.5rem 0;
  font-size: 1.2rem;
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

export const WrapperItems = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1.6rem 0 1rem 0;
`
