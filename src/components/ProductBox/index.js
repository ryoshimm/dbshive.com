import React from 'react'


const ProductBox = (props) => {
  const { product } = props

  return (
    <div className="Product">
      <h3>{product.title}</h3>
      {product.description}
    </div>
  )
}

export default ProductBox
