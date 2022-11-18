import styled from 'styled-components';

const Dropdown = styled.div`    
    position: absolute;
    top: -100px;
    bottom: 0;
    width: 300px; 
    padding: 1rem;
    overflow: hidden;
    background-color: #484a4d;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;
`;

const DropdownItem = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 50%;
    padding: 0.5rem;
    color: #fff;
    width: 100%;

    &:hover {
        filter: brightness(1.2);    
    }
`;

export default {
    Dropdown,
    DropdownItem
}