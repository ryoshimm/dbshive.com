import React from 'react'
import styled from 'styled-components'

const ImageWrapper = styled.div`
  width: 100%;
  height: 13rem;
`

const Image = styled.img`
  width: 100%;
  height: 100%
  border-radius: 0.5rem;
  object-fit: cover;
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
