import React, { Component } from 'react'

// components
import AuthorBox from '../../components/AuthorBox'
import Header from '../../components/Header'
import ProductBox from '../../components/ProductBox'
import SelectCategoryFilter from '../../components/SelectCategoryFilter'
import SelectQualityFilter from '../../components/SelectQualityFilter'

// styles
import {
  StyledFilter,
  StyledProduct,
  StyledProducts,
  StyledTitle,
  WrapperAuthor,
} from './styles'

// assets
import { authorAsset } from '../../static/assets/authorAsset'
import { productAsset } from '../../static/assets/productAsset'
import { otherCategoryAsset } from '../../static/assets/categoryAsset'


class Profile extends Component {
  state = {
    products: [],
    selectAuthor: 1,
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
      const isIncludeOther = product.categorys.some(category => {
        return otherCategoryAsset.includes(category)
      })

      return (
        (
          this.state.selectQuality === 0 || this.state.selectQuality === product.quality
        ) && (
          this.state.selectCategory === 'ALL'
          || product.categorys.includes(this.state.selectCategory)
          || (
            this.state.selectCategory === 'other' && isIncludeOther
          )
        ) && (
          this.state.selectAuthor === 0 || product.author.includes(this.state.selectAuthor)
        )
      )
    })

    return (
      <StyledProduct className="User">
        <Header
          select='Profile'
        />

        <WrapperAuthor>
          <AuthorBox
            author={authorAsset[0]}
            width='42rem'
          />
        </WrapperAuthor>

        <StyledTitle>Product: rias-z</StyledTitle>

        <StyledFilter>
          <SelectQualityFilter
            select={this.state.selectQuality}
            onToggle={this.handleChangeSelectQuality}
          />

          <SelectCategoryFilter
            select={this.state.selectCategory}
            onToggle={this.handleChangeSelectCategory}
          />

        </StyledFilter>

        <StyledProducts>
          {renderProducts.map((product, idx) => (
            <ProductBox
              key={idx}
              product={product}
            />
          ))}
        </StyledProducts>
      </StyledProduct>
    )
  }
}

export default Profile
