import React, { Component } from 'react'

// components
import ProductBox from '../../components/ProductBox'

// assets
import { productsAsset } from '../../static/assets/productsAsset'


class Product extends Component {
  state = {
    products: [],
    categorys: [],
    selectCategory: 'ALL',
    selectQuality: 0,
  }

  componentWillMount() {
    const products = productsAsset.map(product => {
      return product
    })

    this.setState({
      products: products,
    })
  }

  handleChangeSelectQuality = (number) => {
    console.log('handleChangeSelectQuality:', number)
  }

  render() {
    const renderProducts = this.state.products.filter(product => {
      return (
        this.state.selectQuality === 0 || this.state.selectQuality === product.quality
      )
    })

    return (
      <div className="Product">
        <h1>Product</h1>

        {/* <QualityFilter
          select={this.state.selectQuality}
          onToggle={handleChangeSelectQuality}
        /> */}

        <div>
          {renderProducts.map(rp =>
            <ProductBox key={rp.id} product={rp} />)}
        </div>
      </div>
    )
  }
}

export default Product
