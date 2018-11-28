import React from 'react'

// components
import ProductExternalLink from '../../components/ProductExternalLink'

// styles
import {
  Container,
  Image,
  IconImage,
  StyledAuthorBox,
  StyledDescription,
  StyledItem,
  StyledItemTitle,
  StyledName,
  Wrapper,
  WrapperContents,
  WrapperItems,
} from './styles'


const AuthorBox = (props) => {
  const { author, width } = props

  const replaceMainDescription = author.mainDescription.map((d, idx) => {
    return (
      <li key={idx}>{d}</li>
    )
  })

  const replaceItemTechnology = author.itemTechnology.map((item, idx) => {
    return (
      <li key={idx}>{item}</li>
    )
  })

  const replaceItemHobby = author.itemHobby.map((item, idx) => {
    return (
      <li key={idx}>{item}</li>
    )
  })

  const replaceItemMail = author.itemMail.map((mail, idx) => {
    return (
      <li key={idx}>{mail}</li>
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
          <ul>{replaceMainDescription}</ul>

          <WrapperItems>
            <StyledItem>
              <StyledItemTitle>
                <IconImage src='/images/icon_tech.png' />
                Technology
              </StyledItemTitle>
              <ul>{replaceItemTechnology}</ul>
            </StyledItem>

            <StyledItem>
              <StyledItemTitle>
                <IconImage src='/images/icon_hobby.png' />
                Hobby
              </StyledItemTitle>
              <ul>{replaceItemHobby}</ul>
            </StyledItem>

            <StyledItem>
              <StyledItemTitle>
                <IconImage src='/images/icon_mail.png' />
                Mail
              </StyledItemTitle>
              <ul>{replaceItemMail}</ul>
            </StyledItem>
          </WrapperItems>

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
