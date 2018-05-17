import React from 'react'
import styled from 'styled-components'

// components
import AuthorList from '../AuthorList'

const StyledProductFooter = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
`


const ProductFooter = (props) => {
  const { product } = props

  return (
    <StyledProductFooter>
      <AuthorList
        product={product}
      />
    </StyledProductFooter>
  )
}

export default ProductFooter
