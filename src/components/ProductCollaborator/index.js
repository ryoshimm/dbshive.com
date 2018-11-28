import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import Tooltip from '@material-ui/core/Tooltip'
import { collaboratorAsset } from '../../static/assets/collaboratorAsset'


const StyledProductCollaborator = styled.div`
  position: absolute;
  left: 2rem
  bottom: 0;
  margin: 0 0 0.4rem 0;
  padding: 0;
`

const Image = styled.img`
  margin: 0 0.4rem 0 0;
  border-radius: 1rem;
`


const ProductCollaborator = (props) => {
  const { product } = props

  const handleTrasitionScreen = (path) => {
    props.history.push(path)
  }

  if (!product.collaborator) {
    return <noscript />
  }

  const collaboratorList = product.collaborator.map(id => {
    const { name } = collaboratorAsset[0]

    return (
      <div // eslint-disable-line
        key={id}
        onClick={() => handleTrasitionScreen('/collaborator')}
      >
        <Tooltip id="tooltip-top" title={name} placement="top">
            <Image
              alt={id}
              src="/images/author/sc_author_2.jpg"
              width='32'
              height='32'
            />
        </Tooltip>
      </div>
    )
  })

  return (
    <StyledProductCollaborator>
      <div>collaborator:</div>
      {collaboratorList}
    </StyledProductCollaborator>
  )
}

export default withRouter(ProductCollaborator)
