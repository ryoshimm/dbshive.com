import React from 'react'
import styled from 'styled-components'
import Tooltip from '@material-ui/core/Tooltip'


const StyledProductExternalLink = styled.div`
  display: flex;
  position: absolute;
  right: 1rem
  bottom: 0;
  margin: 0 0 0.4rem 0;
  padding: 0;
`

const Image = styled.img`
  right: 3rem;
  margin: 0 0 0 0.6rem;
  border-radius: 0.4rem;
`


const ExternalLink = (props) => {
  const { url, githubUrl } = props

  return (
    <StyledProductExternalLink>
      {(() => {
        if (url) {
          return (
              <a href={url} target="_blank">
                <Tooltip id="tooltip-top" title='open website' placement="top">
                  <Image
                    key={url}
                    src="/images/icon_link.png"
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

      {(() => {
        if (githubUrl) {
          return (
              <a href={githubUrl} target="_blank">
                <Tooltip id="tooltip-top" title='See the source on Github' placement="top">
                  <Image
                    key={githubUrl}
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
