import React from 'react'
import styled from 'styled-components'


const Button = styled.button`
  border: none;
  width: 5rem;
  height: 2rem;
  &[data-toggle='true'] {
    background: #888;
  }
  &[data-toggle='false'] {
    background: #eee;
  }
  font-size: 1rem;
`

const FilterButton = (props) => {
  const { data, label, isToggle } = props
  const { onToggle } = props

  return (
    <Button
      type="button"
      data-toggle={isToggle}
      onClick={() => {
        onToggle(data)
      }}
      value={label}
    >
      {label}
    </Button>
  )
}

export default FilterButton
