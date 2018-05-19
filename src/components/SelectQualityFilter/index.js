import React from 'react'
import styled from 'styled-components'

// components
import FilterButton from '../FilterButton'

const Wrapper = styled.div`
  margin: 0 1rem;
`

const StyledTitle = styled.p`
  margin: 0.2rem 0;
  font-family: monospace;
  font-size: 1.2rem;
`

const SelectQualityFilter = (props) => {
  const { select, onToggle } = props

  return (
    <Wrapper>
      <div className="SelectQualityFilter">
        <StyledTitle>Quality</StyledTitle>

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
