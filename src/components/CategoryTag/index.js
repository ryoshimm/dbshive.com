import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  right: 1rem;
`

const StyledCategoryTag = styled.div.attrs({
  bg: props => props.bg,
  cl: props => props.cl
})`
  background-color: ${props => props.cl};
  margin: 0 0 0 0.6rem;
  padding: 0 0.5rem 0.1rem 0.5rem;
  box-shadow: 0 0.2rem 0.01rem ${props => props.bg};
  border-radius: 0 0 0.7rem 0.7rem;
  color: white;
  font-weight: 640;
`

const CategoryTag = (props) => {
  const { categorys } = props

  const renderCategoryTag = categorys.map(category => {
    let cl = '#667'
    let bg = '#223'

    switch (category) {
      case 'web': {
        cl = '#68d'
        bg = '#446'
        break
      }
      case 'game': {
        cl = '#e96'
        bg = '#644'
        break
      }
      case 'ios': {
        cl = '#6d8'
        bg = '#464'
        break
      }
      case 'sns': {
        cl = '#6bd'
        bg = '#466'
        break
      }
      default:
        break
    }
    return (
      <StyledCategoryTag
        key={category}
        cl={cl}
        bg={bg}
      >
        {category}
      </StyledCategoryTag>
    )
  })

  return (
    <Wrapper>
      {renderCategoryTag}
    </Wrapper>
  )
}

export default CategoryTag
