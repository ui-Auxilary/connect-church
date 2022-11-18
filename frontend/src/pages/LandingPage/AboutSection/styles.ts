import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    margin: 8rem auto;
    position: relative;
    height: 35rem;
`;

const LeftImage = styled.img`
    border-radius: 0 25px 25px 0;
    overflow: hidden;
    float: right;
    width: 60vw;
    object-fit: cover;
`;

const Right = styled.div`
    color: #231F27;
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
    LeftImage,
    Right,
    Title,
    Slogan,
    AboutContent,
    ContentBlock
}