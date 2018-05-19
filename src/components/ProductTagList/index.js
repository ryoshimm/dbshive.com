import React from 'react'
import styled from 'styled-components'

// components
import Chip from '../Chip'

const Wrapper = styled.div`
  display: flex;
`


const ProductTagList = (props) => {
  const { product } = props

  const chips = product.tags.map((tag, idx) => (
    <Chip key={idx} tag={tag} />
  ))

  return (
    <Wrapper>
      {chips}
    </Wrapper>
  )
}

export default ProductTagList
