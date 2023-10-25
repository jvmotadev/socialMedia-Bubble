/* eslint-disable react/prop-types */
import styled from "styled-components"
import logo from '/logo-bubble-b.svg'
import Button from "../Button/Button"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <StylesHeader>
            <div className="container">
                <img src={logo} alt="" />
                <nav>
                    <Link to='/login'>
                        <a>LOGIN</a>
                    </Link>
                    <Link to='/cadastro'>
                        <Button
                            variant='primary'
                            texto='CADASTRE-SE'        
                        />
                    </Link>
                </nav>
            </div>
        </StylesHeader>
    )
}

const StylesHeader = styled.header`
max-width: 100vw;
background: ${(props) => props.theme.colors.primary.p1};

.container{
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 3;
    margin-top: 2rem;
    

    img{
        width: 119px;
        height: 45px;
        z-index: 3;
    }
    }

    nav{
        display: flex;
        gap: 8px;
        align-items: center;
        z-index: 3;

        a{
            font-family: Roboto;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 36px;
        }

        button{
            font-family: Poppins;
            font-size: 12px;
            font-style: normal;
            font-weight: 600;
            line-height: 16px;
            width: 121px;
            height: 36px;
            
        }
    }
    

    @media (min-width: 400px) and (max-width: 768px) {

    .container{ 
        img{
            width: 149px;
            height: 56px;
        }

        nav{
            a{
                font-size: 14px;
            }

            button{
                font-size: 12px;
                width: 121px;
                height: 36px;
                }
            }
        }
    }


    @media (min-width: 769px) and (max-width: 1024px) {
        .container{ 
            img{
                width: 186px;
                height: 70px;
            }
            nav{
                a{
                    font-size: 24px;
                }
                button{
                    font-size: 18px;
                    width: 176px;
                    height: 40px;
                    }
                }
        }
    }

    @media (min-width: 1025px) {

        .container{ 
            img{
                width: 233px;
                height: 88px;
            }

            nav{
                a{
                    font-size: 24px;
                }

                button{
                    font-size: 32px;
                    width: 323px;
                    height: 74px;
                    }
                }
        }
    }
`

export default Header