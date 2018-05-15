import React, { Component } from 'react'

// components
import ProductBox from '../../components/ProductBox'
import SelectCategoryFilter from '../../components/SelectCategoryFilter'
import SelectQualityFilter from '../../components/SelectQualityFilter'

// assets
import { productsAsset } from '../../static/assets/productsAsset'


class Product extends Component {
  state = {
    products: [],
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

  handleChangeSelectQuality = (select) => {
    this.setState({
      selectQuality: select
    })
  }

  handleChangeSelectCategory = (select) => {
    this.setState({
      selectCategory: select
    })
  }

  render() {
    const renderProducts = this.state.products.filter(product => {
      return (
        (
          this.state.selectQuality === 0 || this.state.selectQuality === product.quality
        ) && (
          this.state.selectCategory === 'ALL' || this.state.selectCategory === product.category
        )
      )
    })

    return (
      <div className="Product">
        <h1>Product</h1>

        <SelectQualityFilter
          select={this.state.selectQuality}
          onToggle={this.handleChangeSelectQuality}
        />

        <SelectCategoryFilter
          select={this.state.selectCategory}
          onToggle={this.handleChangeSelectCategory}
        />

        <div>
          {renderProducts.map(rp =>
            <ProductBox key={rp.id} product={rp} />)}
        </div>
      </div>
    )
  }
}

export default Product
