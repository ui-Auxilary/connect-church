import styled from 'styled-components';

const Container = styled.div`
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    margin: 8rem auto;
    position: relative;
    height: 35rem;
    background: linear-gradient(#7CB7FF 10%, #F9EFEF);
    text-align: center;
    color: #FFF;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const Right = styled.div`
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    padding: 10rem;
    width: 100vw;
`;

const Title = styled.h1`
    text-transform: uppercase;
    font-size: 3rem;
`;

const Slogan = styled.span`
    font-family: system-ui;
    font-weight: 300;
    font-size: 1.5rem;
    font-style: italic;
`;

const AboutContent = styled.p`
    font-size: 1.3rem;
    font-family: system-ui;
`;

const ContentBlock = styled.div`
    margin-bottom: 3rem;
    margin-top: -4rem;
`

export default {
    Container,
    CardContainer,
    Right,
    Title,
    Slogan,
    AboutContent,
    ContentBlock
}