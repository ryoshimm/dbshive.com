import React, { Component } from 'react'


const AuthorList = (props) => {
  const { product, authorThumbnails } = props

  const renderAuthorList = product.author.map(authorId => {
    return (
      <img
        alt={authorId}
        src={authorThumbnails[authorId]}
        width='32'
        height='32'
      />
    )
  })

  return (
    <div>
      <div>Author: </div>
      {renderAuthorList}
    </div>
  )
}


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

    return (
      <div className="ProductBox">
        <h3>{product.title}</h3>

        {(() => {
          if (this.state.imageFile) {
            return (
              <img
                alt={product.id}
                src={this.state.imageFile}
                width='200'
                height='100'
              />
            )
          } else {
            return (
              <div>[image not found]</div>
            )
          }
        })()}

        {product.description}

        <AuthorList
          authorThumbnails={authorThumbnails}
          product={product}
        />
      </div>
    )
  }
}

export default ProductBox
