import React, { Component } from 'react'

// components
import ProductBox from '../../components/ProductBox'
import SelectAuthorFilter from '../../components/SelectAuthorFilter'
import SelectCategoryFilter from '../../components/SelectCategoryFilter'
import SelectQualityFilter from '../../components/SelectQualityFilter'

// assets
import { productAsset } from '../../static/assets/productAsset'
// import { userAsset } from '../../static/assets/userAsset'


class Product extends Component {
  state = {
    products: [],
    selectAuthor: 0,
    selectCategory: 'ALL',
    selectQuality: 0,
  }

  componentWillMount() {
    const products = productAsset.map(product => {
      return product
    })

    this.setState({
      products: products,
    })
  }

  handleChangeSelectAuthor = (select) => {
    this.setState({
      selectAuthor: select,
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
          this.state.selectCategory === 'ALL' || product.categorys.includes(this.state.selectCategory)
        ) && (
          this.state.selectAuthor === 0 || product.author.includes(this.state.selectAuthor)
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

        <SelectAuthorFilter
          select={this.state.selectAuthor}
          onToggle={this.handleChangeSelectAuthor}
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
