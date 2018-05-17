import React from 'react'
import styled from 'styled-components'

const ImageWrapper = styled.div`
  width: 100%;
  height: 219px;
`

const Image = styled.img`
  max-width: 100%;
  border-radius: 0.5rem;
`


const ImageBox = (props) => {
  const { product } = props

  return (
    <ImageWrapper>
      <Image
        alt={product.id}
        src={'/images/product/sc_product_' + product.id + '.jpg'}
      />
    </ImageWrapper>
  )
}

export default ImageBox
