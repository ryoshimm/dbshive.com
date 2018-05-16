import React from 'react'

// components
import FilterButton from '../FilterButton'

// assets
import { userAsset } from '../../static/assets/userAsset'


const SelectAuthorFilter = (props) => {
  const { select, onToggle } = props

  return (
    <div className="SelectAuthorFilter">
      <h3>SelectAuthor</h3>

      <FilterButton
        label='ALL'
        data={0}
        isToggle={select === 0}
        onToggle={onToggle}
      />

      {userAsset.map(c => (
        <FilterButton
          key={c.userId}
          data={c.userId}
          label={c.name}
          isToggle={select === c.userId}
          onToggle={onToggle}
        />
      ))}
    </div>
  )
}

export default SelectAuthorFilter
