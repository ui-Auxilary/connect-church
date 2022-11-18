import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  max-width: 100%;
  width: 100vw;
  background: #2F3034;
  height: 4rem;
  padding: 1rem;
`;

const Logo = styled.img`
  display: inline-block;
  width: 40%;
`;

const Nav = styled.ul`
  height: 100%;
  width: 80%;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
  z-index: 100;
`;

const StyledLink = styled(Link)`
  color: #FFF;
`;

export default {
  Navbar,
  Nav,
  Logo,
  StyledLink
}