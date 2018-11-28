import React from 'react'

// component
import ImageBox from '../ImageBox'
import CategoryTag from '../CategoryTag'
import ProductCollaborator from '../ProductCollaborator'
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
  StyledProductTitle,
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
        <CategoryTag
          categorys={product.categorys}
        />

        <StyledProductTitle>{product.title}</StyledProductTitle>

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

        <ProductCollaborator
          product={product}
        />

        <ProductExternalLink
          url={product.url}
          githubUrl={product.githubUrl}
        />
      </Wrapper>
    </StyledProductBox>
  )
}

export default ProductBox
