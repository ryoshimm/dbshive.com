import React, { Component } from 'react'

// component
import ImageBox from '../ImageBox'
import ProductFooter from '../ProductFooter'

// styles
import {
  StyledDescription,
  StyledMessage,
  StyledProductBox,
  Wrapper,
} from './styles'


class ProductBox extends Component {
  state = {
    imageFile: null,
  }

  componentWillMount() {
    const { product } = this.props

    import('../../static/images/products/sc_product_' + product.id + '.jpg')
      .then(file => {
        this.setState({
          imageFile: file,
        })
      })
      .catch(() => {
        console.log('[Error] imageFile Not Found: product:' + product.id)
      })
  }

  render() {
    const { product, authorThumbnails } = this.props

    const replaceDesctiption = product.description.split('\n').map(d => {
      return (
        <StyledMessage>{d}</StyledMessage>
      )
    })

    return (
      <StyledProductBox className="ProductBox">
        <Wrapper>
          <h3>{product.title}</h3>

          <ImageBox
            imageFile={this.state.imageFile}
            product={product}
          />

          <StyledDescription>
            {replaceDesctiption}
          </StyledDescription>

          <ProductFooter
            authorThumbnails={authorThumbnails}
            product={product}
          />
        </Wrapper>
      </StyledProductBox>
    )
  }
}

export default ProductBox
