import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    position: relative;
    height: 35rem;
`;

const ImageOverlay = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.2);
`;

const MapImage = styled.img`
    width: 100%;
    object-fit: cover;
`;

export default {
    Container,
    MapImage,
    ImageOverlay
}