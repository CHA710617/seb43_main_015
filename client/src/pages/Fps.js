import styled from "styled-components";


const Fps = () => {

    const InitPage = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
    `
    return(
        <InitPage>FPS</InitPage>
    )
}

export default Fps;