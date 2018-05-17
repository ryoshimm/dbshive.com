import React from 'react'
import styled from 'styled-components'
import Tooltip from '@material-ui/core/Tooltip'
import { authorAsset } from '../../static/assets/authorAsset'

const StyledProductAuthor = styled.div`
  position: absolute;
  left: 2rem
  bottom: 0;
  margin: 0;
  padding: 0;
`

const Image = styled.img`
  margin: 0 0.4rem 0 0;
`


const ProductAuthor = (props) => {
  const { product } = props


  const renderAuthorList = product.author.map(authorId => {
    const authorName = authorAsset[authorId - 1].name

    return (
      <Tooltip key={authorId} id="tooltip-top" title={authorName} placement="top">
        <Image
          alt={authorId}
          src={'/images/author/sc_author_' + authorId + '.jpg'}
          width='32'
          height='32'
        />
      </Tooltip>
    )
  })

  if (Object.keys(product.author).length > 0) {
    return (
      <StyledProductAuthor>
        <div>Author:</div>
        {renderAuthorList}
      </StyledProductAuthor>
    )
  } else {
    return null
  }
}

export default ProductAuthor
