import {useSelector} from "react-redux";
import { selectLanguage } from "reducers/selectLanguageSlice";

import S from './style';
import ChurchLogo from 'assets/church_logo.png'

const Header = () => {
    const t = useSelector(selectLanguage);

    return (
        <S.Navbar>
            <S.StyledLink to="/">
                <S.Logo src={ChurchLogo}/>
            </S.StyledLink>
            <S.Nav>
                <S.StyledLink to="/">{t.home}</S.StyledLink>
                <S.StyledLink to="/services">{t.services}</S.StyledLink>
                <S.StyledLink to="/about">{t.about}</S.StyledLink>
                <S.StyledLink to="/offering">{t.give}</S.StyledLink>
                <S.StyledLink to="/contact">{t.contact}</S.StyledLink>
            </S.Nav>
        </S.Navbar>
    );
}

export default Header;
