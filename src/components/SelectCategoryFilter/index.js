import React from 'react'

// components
import FilterButton from '../FilterButton'

// assets
import { categoryAsset } from '../../static/assets/categoryAsset'

// styles
import { Wrapper } from './styles'


const SelectCategoryFilter = (props) => {
  const { select, onToggle } = props

  return (
    <Wrapper>
      <div className="SelectCategoryFilter">
        <h3>SelectCategory</h3>

        <FilterButton
          data='ALL'
          label='ALL'
          isToggle={select === 'ALL'}
          onToggle={onToggle}
        />

        {categoryAsset.map(c => (
          <FilterButton
            key={c}
            data={c}
            label={c}
            isToggle={select === c}
            onToggle={onToggle}
          />
        ))}
      </div>
    </Wrapper>
  )
}

export default SelectCategoryFilter
