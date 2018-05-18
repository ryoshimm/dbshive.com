import React from 'react'
import styled from 'styled-components'


const StyledChip = styled.div`
  margin: 0 0.15rem;
  padding: 0.2rem 0.4rem;
  border-radius: 0.2rem;
  background-color: #334;
  color: #e1e8ed;
  font-family: monospace;
  font-size: 0.90rem;
`

const Chip = (props) => {
  const { tag } = props

  return (
    <StyledChip>
      {tag}
    </StyledChip>
  )
}

export default Chip
