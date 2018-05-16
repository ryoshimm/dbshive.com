import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  margin: 0 0.3rem 0 0;
`


const AuthorList = (props) => {
  const { product, authorThumbnails } = props

  const renderAuthorList = product.author.map(authorId => {
    return (
      <Image
        key={authorId}
        alt={authorId}
        src={authorThumbnails[authorId]}
        width='32'
        height='32'
      />
    )
  })

  return (
    <div>
      <div>Author:</div>
      {renderAuthorList}
    </div>
  )
}

export default AuthorList
