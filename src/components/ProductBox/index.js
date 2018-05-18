import React from 'react'

// component
import ImageBox from '../ImageBox'
import ProductAuthor from '../ProductAuthor'
import ProductExternalLink from '../ProductExternalLink'
import ProductTagList from '../ProductTagList'

// styles
import {
  ContentsWrapper,
  StyledAttention,
  StyledDate,
  StyledDescription,
  StyledMessage,
  StyledProductBox,
  Wrapper,
  WrapperAttention,
} from './styles'


const ProductBox = (props) => {
  const { product } = props

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

        <ContentsWrapper>
          <StyledDescription>
            {replaceDesctiption}
          </StyledDescription>

          {(() => {
            if (product.date) {
              return (
                <StyledDate>
                  Date: {product.date}
                </StyledDate>
              )
            } else {
              return null
            }
          })()}

          {(() => {
            if (product.attention) {
              const replaceAttention = product.attention.split('\n').map((line, idx) => {
                return (
                  <StyledAttention key={idx}>
                    {line}
                  </StyledAttention>
                )
              })

              return (
                <WrapperAttention>
                  {replaceAttention}
                </WrapperAttention>
              )
            } else {
              return null
            }
          })()}

          <ProductTagList
            product={product}
          />
        </ContentsWrapper>

        <ProductAuthor
          product={product}
        />

        <ProductExternalLink
          product={product}
        />
      </Wrapper>
    </StyledProductBox>
  )
}

export default ProductBox
