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
    onChange,
    hasError, }) => {
    return (
        <StyleTextfield>
            <label htmlFor={name}>{label}</label>
            <Input
                placeholder='Input' />
        </StyleTextfield>
    )
}

const StyleTextfield = styled.fieldset`
  width: 100%;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
 `

export default TextField