/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Input from '../Input/Input'
import styled from 'styled-components'
const TextField = ({ label,
    name,
    type,
    required,
    placeholder,
    value,
    width,
    height }) => {
    return (
        <StyleTextfield>
            <label htmlFor={name}>{label}</label>
            <textarea
                required={required}
                type={type}
                width={width}
                height={height}
                placeholder={placeholder}
                value={value}>
            </textarea>
        </StyleTextfield>
    )
}

const StyleTextfield = styled.fieldset`
  width: 100%;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 0;
 `

export default TextField