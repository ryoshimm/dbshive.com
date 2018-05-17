import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  margin: 0 0.3rem 0 0;
`


const AuthorList = (props) => {
  const { product } = props

  const renderAuthorList = product.author.map(authorId => {
    return (
      <Image
        key={authorId}
        alt={authorId}
        src={'/images/author/sc_author_' + authorId + '.jpg'}
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
