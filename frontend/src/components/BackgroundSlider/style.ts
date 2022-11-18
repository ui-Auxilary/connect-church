import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    overflow: hidden;
`;

const Overlay = styled.div`
	position: absolute;
	width: 100%;
	height: 100vh;
	background-color: rgba(0,0,0,0.5);
`;

const Slides = styled.img`
	width: 100%;
	height: 100vh;
	object-fit: cover;
	z-index: -1;
`;

export default {
	Container,
	Slides,
	Overlay
}