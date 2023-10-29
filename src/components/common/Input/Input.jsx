/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components"

const Input = ({ placeholder, name, type, value, onChange, hasError, IsValid, required, width, height, change }) => {
    const variantes = {
        error: ``,
        valid: ``
    }
    return (
        <StylesInput
            name={name}
            type={type}
            value={value}
            onChange={change}
            style={{
                border: IsValid ? variantes.valid : hasError ? variantes.error : '',
            }}
            required={required}
            placeholder={placeholder}
            width={width}
            height={height}
        />



    )
}

const StylesInput = styled.input`
    background-color: ${(props) => props.theme.colors.black.b50};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`

export default Input