import React from 'react'

// components
import FilterButton from '../FilterButton'

// styles
import { Wrapper } from './styles'


const SelectQualityFilter = (props) => {
  const { select, onToggle } = props

  return (
    <Wrapper>
      <div className="SelectQualityFilter">
        <h3>SelectQuality</h3>

        <FilterButton
          data={0}
          label='ALL'
          isToggle={select === 0}
          onToggle={onToggle}
        />
        <FilterButton
          data={1}
          label='low'
          isToggle={select === 1}
          onToggle={onToggle}
        />
        <FilterButton
          data={2}
          label='middle'
          isToggle={select === 2}
          onToggle={onToggle}
        />
        <FilterButton
          data={3}
          label='high'
          isToggle={select === 3}
          onToggle={onToggle}
        />
      </div>
    </Wrapper>
  )
}

export default SelectQualityFilter
