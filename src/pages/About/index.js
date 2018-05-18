import React from 'react'
import styled from 'styled-components'

// components
import AuthorBox from '../../components/AuthorBox'

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

export const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  justify-content: center;
  padding: 0;
`


const About = () => {
  return (
    <StyledAbout className="About">
      <h1>About</h1>
      <Wrapper>
        {authorAsset.map(author => {
          return (
            <AuthorBox
              author={author}
            />
          )
        })}
      </Wrapper>
    </StyledAbout>
  )
}

export default About
