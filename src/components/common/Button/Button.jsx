/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components"

const Button = ({ texto, variant, width, onClick, fontSize, height, fontWeight }) => {
    return (
        <>
            {variant == 'primary' && <ButtonCadastrarPrimario onClick={onClick} width={width} font-size={fontSize} height={height} font-weight={fontWeight}>{texto}</ButtonCadastrarPrimario>}
            {variant == 'secondary' && <ButtonCadastrarSecundario onClick={onClick} width={width} font-size={fontSize} height={height} font-weight={fontWeight}>{texto}</ButtonCadastrarSecundario>}
            {variant == 'buttonForms' && <ButtonForms onClick={onClick} width={width} font-size={fontSize} height={height} font-weight={fontWeight}>{texto}</ButtonForms>}
            {variant == 'buttonPostarOrdenar' && <ButtonPostarOrdenarDescendente onClick={onClick} width={width} font-size={fontSize} height={height} font-weight={fontWeight}>{texto}</ButtonPostarOrdenarDescendente>}
            {variant == 'buttonAscendente' && <ButtonOrdenarAscendente onClick={onClick} width={width} font-size={fontSize} height={height} font-weight={fontWeight}>{texto}</ButtonOrdenarAscendente>}
        </>
    )
}

const StylesButton = styled.button`
    width: auto;
    display: inline-flex;
    padding: 17px 60px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`
const ButtonCadastrarPrimario = styled(StylesButton)`
    background-color: ${(props) => props.theme.colors.primary.p3};
    border-radius: 8px;
    color: ${(props) => props.theme.colors.black.b100};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`
const ButtonCadastrarSecundario = styled(StylesButton)`
    background-color: ${(props) => props.theme.colors.primary.p1};
    color: ${(props) => props.theme.colors.black.b100};
    border-radius: 8px;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    
`
const ButtonForms = styled(StylesButton)`
    background-color: ${(props) => props.theme.colors.black.b50};
    color: ${(props) => props.theme.colors.black.b100};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`
const ButtonPostarOrdenarDescendente = styled(StylesButton)`
    border-radius: 24px;
    background-color: ${(props) => props.theme.colors.primary.p3};
    color: ${(props) => props.theme.colors.black.b200};
    border-radius: 24px;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`
const ButtonOrdenarAscendente = styled(StylesButton)`
    border-radius: 24px;
    background-color: ${(props) => props.theme.colors.primary.p2};
    color: ${(props) => props.theme.colors.black.b200};
    border-radius: 24px;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`



export default Button