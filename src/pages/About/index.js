import React from 'react'
import styled from 'styled-components'

// components
import AuthorBox from '../../components/AuthorBox'
import Header from '../../components/Header'

// assets
import { authorAsset } from '../../static/assets/authorAsset'

export const StyledAbout = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #334;
  color: #e1e8ed;
`

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  justify-content: center;
  padding: 0;
`


const About = () => {
  return (
    <StyledAbout className="About">
      <Header
        select='About'
      />
      <Wrapper>
        {authorAsset.map(author => {
          return (
            <AuthorBox
              key={author.id}
              author={author}
            />
          )
        })}
      </Wrapper>
    </StyledAbout>
  )
}

export default About
