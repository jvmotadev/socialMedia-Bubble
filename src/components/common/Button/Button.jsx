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
    border-radius: 8px;
`
const ButtonCadastrarPrimario = styled(StylesButton)`
    background-color: ${(props) => props.thema.colors.primary.p3};
`
const ButtonCadastrarSecundario = styled(StylesButton)`
    background-color: ${(props) => props.thema.colors.primary.p1};
`
const ButtonForms = styled(StylesButton)`
    background-color: ${(props) => props.thema.colors.primary.p2};
`
const ButtonPostarOrdenarDescendente = styled(StylesButton)`
    border-radius: 24px;
    background-color: ${(props) => props.thema.colors.primary.p3};
`
const ButtonOrdenarAscendente = styled(StylesButton)`
    border-radius: 24px;
    background-color: ${(props) => props.thema.colors.primary.p2};
`



export default Button