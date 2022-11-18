import styled from "styled-components";

const DropdownMenu = styled.div`
    background: #fff;
    padding: 20px;
    border-bottom: 2px solid #603d7b;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    position: sticky;
    bottom: 0;
    width: 30%;
    color: #000;
`;

const CheckBox = styled.input`
    &:checked {
        display: none;
    }
`;

const Label = styled.label`
    cursor: pointer;
    display: block;
    padding: 30px 0 30px 80px;
`;

const MenuContent = styled.div`
    height: 0;
    overflow: hidden;
    ${Label}:hover & {
        height: 300px;
    }
`;

const ContentList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const ListItem = styled.li`
    position: absolute;
    bottom: 1.5rem;
    list-style-type: none;
    cursor: pointer;
    margin-left: 2rem;
`;

const Link = styled.a`
    background-color: #484a4d;
    width: 300px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 1.5rem;

    &:hover {
        filter: brightness(1.2);
    }
`

export default {
    DropdownMenu,
    CheckBox,
    Label,
    MenuContent,
    ContentList,
    ListItem,
    Link
}