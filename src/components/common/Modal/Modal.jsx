/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components"
import TextField from "../TextField/TextField"

const Modal = ({ open, titulo, fechaModal, nome, children }) => {
    const handleClose = (e) => {
        e.target.id === 'modal' && fechaModal()
    }
    return (

        <StylesModal>
            <StylesCabeçalho>
                <img src="" alt="foto perfil usuario" />
                <p>{nome}</p>
            </StylesCabeçalho>


            <StylesContentModal>

                <TextField
                    width='100%'
                    height='519px' />
                {children}
            </StylesContentModal>
        </StylesModal>


    )
}

const StylesModal = styled.div`
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.primary.p1};
`
const StylesCabeçalho = styled.div`
    display: flex;
    gap: 14px;
    padding: 20px 176px 0 32px;
    color: ${(props) => props.theme.colors.black.b200};
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; 
`
const StylesContentModal = styled.div`
   display: flex;
  padding: 47px 32px 49px 32px;
`

export default Modal