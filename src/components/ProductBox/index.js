import React from 'react'

// component
import ImageBox from '../ImageBox'
import ProductFooter from '../ProductFooter'

// styles
import {
  StyledDescription,
  StyledMessage,
  StyledProductBox,
  Wrapper,
} from './styles'


const ProductBox = (props) => {
  const { product, authorThumbnails } = props

  // \nで改行
  const replaceDesctiption = product.description.split('\n').map((d, idx) => {
    return (
      <StyledMessage key={idx}>
        {d}
      </StyledMessage>
    )
  })

  return (
    <StyledProductBox className="ProductBox">
      <Wrapper>
        <h3>{product.title}</h3>

        <ImageBox
          product={product}
        />

        <StyledDescription>
          {replaceDesctiption}
        </StyledDescription>

        <ProductFooter
          authorThumbnails={authorThumbnails}
          product={product}
        />
      </Wrapper>
    </StyledProductBox>
  )
}

export default ProductBox
