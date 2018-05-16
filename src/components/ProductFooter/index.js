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
  const { product, authorThumbnails } = props

  return (
    <StyledProductFooter>
      <AuthorList
        authorThumbnails={authorThumbnails}
        product={product}
      />
    </StyledProductFooter>
  )
}

export default ProductFooter
