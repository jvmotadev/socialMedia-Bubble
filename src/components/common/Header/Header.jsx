/* eslint-disable react/prop-types */
import styled from "styled-components"
import logo from '/logo-bubble-b.svg'
import Button from "../Button/Button"
// import { Link } from 'react-router-dom'
const Header = ({ widthLogo, heigthLogo, padding }) => {
    return (
        <StylesHeader
            // fontSize={fontSize}
            padding={padding}
        >
            <img src={logo} alt=""
                width={widthLogo}
                height={heigthLogo}
            />
            <div id="links">
                <a id="login">LOGIN</a>
                <Button
                    variant='primary'
                    texto='CADASTRE-SE'
                    fontSize='30px'
                    fontWeight='600'
                    width='344px'
                    height='74px'
                />
            </div>



        </StylesHeader>
    )
}

const StylesHeader = styled.header`
    font-size: ${(props) => props.fontSize};
    display: flex;
    justify-content: space-between;
    padding: ${(props) => props.padding};

    h1{
        display: flex;
        align-items: center;
    }

    #links{
        display: flex;
        gap:32px;
        align-items: center;
    }

    #login{
    color: ${(props) => props.theme.colors.black.b100};
    text-align: center;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
    cursor: pointer; /* 150% */
    }

`


export default Header