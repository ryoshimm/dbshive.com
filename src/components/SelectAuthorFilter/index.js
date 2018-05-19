import React from 'react'
import styled from 'styled-components'

// components
import FilterButton from '../FilterButton'

// assets
import { authorAsset } from '../../static/assets/authorAsset'

const Wrapper = styled.div`
  margin: 0 1rem;
`

const StyledTitle = styled.p`
  margin: 0.2rem 0;
  font-family: monospace;
  font-size: 1.2rem;
`


const SelectAuthorFilter = (props) => {
  const { select, onToggle } = props

  return (
    <Wrapper>
      <div className="SelectAuthorFilter">
        <StyledTitle>Author</StyledTitle>

        <FilterButton
          label='ALL'
          data={0}
          isToggle={select === 0}
          onToggle={onToggle}
        />

        {authorAsset.map(c => (
          <FilterButton
            attr='author'
            key={c.id}
            data={c.id}
            label={c.name}
            isToggle={select === c.id}
            onToggle={onToggle}
          />
        ))}
      </div>
    </Wrapper>
  )
}

export default SelectAuthorFilter
