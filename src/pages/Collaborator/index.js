import React from 'react'
import styled from 'styled-components'

// components
import AuthorBox from '../../components/AuthorBox'
import Header from '../../components/Header'

// assets
import { collaboratorAsset } from '../../static/assets/collaboratorAsset'


const StyledCollaborator = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #334;
  color: #e1e8ed;
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  justify-content: center;
  padding: 0;
`


const Collaborator = () => {
  return (
    <StyledCollaborator className="Collaborator">
      <Header
        select='Collaborator'
      />
      <Wrapper>
        {collaboratorAsset.map(collaborator => {
          return (
            <AuthorBox
              key={collaborator.id}
              author={collaborator}
            />
          )
        })}
      </Wrapper>
    </StyledCollaborator>
  )
}

export default Collaborator
