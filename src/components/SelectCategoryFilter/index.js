import React from 'react'
import styled from 'styled-components'

// components
import FilterButton from '../FilterButton'

// assets
import { categoryAsset } from '../../static/assets/categoryAsset'

const Wrapper = styled.div`
  margin: 0 1rem;
`

const StyledTitle = styled.p`
  margin: 0.2rem 0;
  font-family: monospace;
  font-size: 1.2rem;
`


const SelectCategoryFilter = (props) => {
  const { select, onToggle } = props

  return (
    <Wrapper>
      <div className="SelectCategoryFilter">
        <StyledTitle>Category</StyledTitle>

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
