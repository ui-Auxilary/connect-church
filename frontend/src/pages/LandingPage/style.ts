import styled from 'styled-components';
import img from 'assets/waves4.svg';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
`;

const Title = styled.h1`
  margin-top: 0.8rem;
  font-family: 'Poppins', sans-serif;
  font-size: 4.5rem;
  color: #DFFED1;
`

const HeroContent = styled.div`
  top: 0;
  width: 100%;
  position: absolute;
  margin-top: 3rem;
  padding: 8rem;
  text-transform: uppercase;
  font-size: 2.5rem;
  font-family: 'Poppins', sans-serif;
  color: #fff;
`;

const HeroSubContent = styled.div`
  width: 100%;
  margin-top: 4rem;
  font-size: 2.1rem;
  text-transform: initial;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: #fff;
`;

const HeroCTA = styled.button`
  margin-top: 0.5rem;
  background: none;
  outline: solid 2px #fff;
  width: 11rem;
  height: 3rem;
  color: #fff;  
  font-size: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const Wave = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  height: 450px;
  width: 850px;
  position: absolute;
  bottom: 0;
  opacity: 0.8;
`;

export default {
  Wrapper,
  HeroContent,
  Wave,
  Title,
  HeroSubContent,
  HeroCTA,
  ButtonWrapper
}