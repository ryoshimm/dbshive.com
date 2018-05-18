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
      {(() => {
        if (product.imgUrl) {
          return (
            <Image
              src={'/images/product/sc_' + product.imgUrl}
            />
          )
        } else {
          return (
            <Image
              src="/images/no_image.jpg"
            />
          )
        }
      })()}
    </ImageWrapper>
  )
}

export default ImageBox
