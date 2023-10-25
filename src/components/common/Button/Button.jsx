/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components"

const Button = ({ texto, variant, width, onClick, fontSize, height, fontWeight }) => {
    return (
        <>
            {variant == 'primary' && <ButtonCadastrarPrimario onClick={onClick} width={width} fontSize={fontSize} height={height} fontWeight={fontWeight}>{texto}</ButtonCadastrarPrimario>}
            {variant == 'secondary' && <ButtonCadastrarSecundario onClick={onClick} width={width} fontSize={fontSize} height={height} fontWeight={fontWeight}>{texto}</ButtonCadastrarSecundario>}
            {variant == 'buttonForms' && <ButtonForms onClick={onClick} width={width} fontSize={fontSize} height={height} fontWeight={fontWeight}>{texto}</ButtonForms>}
            {variant == 'buttonPostarOrdenar' && <ButtonPostarOrdenarDescendente onClick={onClick} fontSize={fontSize} fontWeight={fontWeight}>{texto}</ButtonPostarOrdenarDescendente>}
            {variant == 'buttonAscendente' && <ButtonOrdenarAscendente onClick={onClick} fontSize={fontSize} fontWeight={fontWeight}>{texto}</ButtonOrdenarAscendente>}
        </>
    )
}

const StylesButton = styled.button`
    width: auto;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    font-family: poppins;
`
const ButtonCadastrarPrimario = styled(StylesButton)`
    background-color: ${(props) => props.theme.colors.primary.p3};
    border-radius: 8px;
    color: ${(props) => props.theme.colors.black.b100};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    font-weight: ${(props) => props.fontWeight};
    font-size: ${(props) => props.fontSize};
`
const ButtonCadastrarSecundario = styled(StylesButton)`
    background-color: ${(props) => props.theme.colors.primary.p1};
    color: ${(props) => props.theme.colors.black.b100};
    border-radius: 8px;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    font-weight: ${(props) => props.fontWeight};
    font-size: ${(props) => props.fontSize};
`
const ButtonForms = styled(StylesButton)`
    background-color: ${(props) => props.theme.colors.primary.p2};
    color: ${(props) => props.theme.colors.black.b100};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    font-weight: ${(props) => props.fontWeight};
    font-size: ${(props) => props.fontSize};
`
const ButtonPostarOrdenarDescendente = styled(StylesButton)`
    border-radius: 24px;
    background-color: ${(props) => props.theme.colors.primary.p3};
    color: ${(props) => props.theme.colors.black.b200};
    border-radius: 24px;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    font-weight: ${(props) => props.fontWeight};
    font-size: ${(props) => props.fontSize};
    font-family: Roboto;
    line-height: 12px; /* 120% */
    height: 10px;
    

`
const ButtonOrdenarAscendente = styled(StylesButton)`
    border-radius: 24px;
    background-color: ${(props) => props.theme.colors.primary.p2};
    color: ${(props) => props.theme.colors.black.b200};
    border-radius: 24px;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    font-weight: ${(props) => props.fontWeight};
    font-size: ${(props) => props.fontSize};
    font-family: Roboto;
    line-height: 12px; /* 120% */
    height: 7px;
`



export default Button