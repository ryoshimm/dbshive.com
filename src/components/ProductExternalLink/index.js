import React from 'react'
import styled from 'styled-components'
import Tooltip from '@material-ui/core/Tooltip'


const StyledProductExternalLink = styled.div`
  position: absolute;
  right: 2rem
  bottom: 0;
  margin: 0;
  padding: 0;
`

const Image = styled.img`
  right: 3rem;
  border-radius: 0.4rem;
`


const ExternalLink = (props) => {
  const { product } = props

  return (
    <StyledProductExternalLink>
      {(() => {
        if (product.githubUrl) {
          return (
              <a href={product.githubUrl}>
                <Tooltip id="tooltip-top" title='See the source on Github' placement="top">
                  <Image
                    key={product.githubUrl}
                    src="/images/icon_github.png"
                    width='42'
                    height='42'
                  />
                </Tooltip>
              </a>
          )
        } else {
          return null
        }
      })()}
    </StyledProductExternalLink>
  )
}

export default ExternalLink
