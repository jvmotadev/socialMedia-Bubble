import styled from "styled-components"

const Feed = () => {
    return (
        <StyleFeed>

        </StyleFeed>
    )
}

export default Feed

const StyleFeed = styled.main`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.white.w50};
`