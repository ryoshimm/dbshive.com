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
  const { imageFile, product } = props

  return (
    <div>
      {(() => {
        if (imageFile) {
          return (
            <ImageWrapper>
              <Image
                alt={product.id}
                src={imageFile}
              />
            </ImageWrapper>
          )
        } else {
          return (
            <div>[image not found]</div>
          )
        }
      })()}
    </div>
  )
}

export default ImageBox
