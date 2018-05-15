import React from 'react'

// components
import FilterButton from '../FilterButton'

// assets
import { categorysAsset } from '../../static/assets/categorysAsset'


const SelectCategoryFilter = (props) => {
  const { select, onToggle } = props

  return (
    <div className="SelectCategoryFilter">
      <h3>SelectCategory</h3>

      <FilterButton
        data='ALL'
        label='ALL'
        isToggle={select === 'ALL'}
        onToggle={onToggle}
      />

      {categorysAsset.map(c => (
        <FilterButton
          key={c}
          data={c}
          label={c}
          isToggle={select === c}
          onToggle={onToggle}
        />
      ))}
    </div>
  )
}

export default SelectCategoryFilter
