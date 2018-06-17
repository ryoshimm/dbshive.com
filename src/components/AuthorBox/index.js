import React from 'react'

// components
import ProductExternalLink from '../../components/ProductExternalLink'

// styles
import {
  Container,
  Image,
  StyledAuthorBox,
  StyledDescription,
  StyledMessage,
  StyledName,
  Wrapper,
  WrapperContents,
} from './styles'


const AuthorBox = (props) => {
  const { author, width } = props

  // \nで改行
  const replaceDesctiption = author.description.split('\n').map((d, idx) => {
    return (
      <StyledMessage key={idx}>
        {d}
      </StyledMessage>
    )
  })

  return (
    <StyledAuthorBox className="AuthorBox" width={width}>
      <WrapperContents>
        <Wrapper>
          <Container>
            <Image
              src={'/images/author/sc_author_' + author.id + '.jpg'}
              width='80'
              height='80'
            />
          </Container>
          <Container>
            <StyledName>{author.name}</StyledName>
          </Container>
        </Wrapper>
        <StyledDescription>
          {replaceDesctiption}
        </StyledDescription>
      </WrapperContents>
      <ProductExternalLink
        url={author.url}
        githubUrl={author.githubUrl}
      />
    </StyledAuthorBox>
  )
}

export default AuthorBox
