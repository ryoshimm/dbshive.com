import React from 'react'
import styled from 'styled-components'


const Button = styled.button.attrs({
  width: props => props.width || '4rem'
})`
  width: ${props => props.width};
  height: 1.8rem;
  &[data-toggle='true'] {
    background: #888;
  }
  &[data-toggle='false'] {
    background: #eee;
  }
  border: none;
  border-radius: 1rem;
  font-size: 0.9rem;
`

const FilterButton = (props) => {
  const {
    attr, data, label, isToggle
  } = props
  const { onToggle } = props

  return (
    <Button
      type="button"
      data-toggle={isToggle}
      onClick={() => {
        onToggle(data)
      }}
      value={label}
      width={attr ? '6rem' : null}
    >
      {label}
    </Button>
  )
}

export default FilterButton
