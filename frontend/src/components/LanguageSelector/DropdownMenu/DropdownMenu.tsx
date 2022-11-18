import { JSXElementConstructor, ReactElement, ReactFragment, ReactNode, ReactPortal } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLang } from "reducers/selectLanguageSlice";
import { RootState } from "store";

import S from './style';

const DropdownMenu = () => {
    const supportedLangs = useSelector((state: RootState) => state.languageSlice.supportedLangs);
    const dispatch = useDispatch();

    const DropdownItem = (props: {
        children: ReactNode; code: string, leftIcon?: string | ReactElement<any, string>, rightIcon?: string | ReactElement<any, string>,  
}) => {
        console.log(props);
        return (
            <S.DropdownItem onClick={() => dispatch(setLang(props.code))}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </S.DropdownItem>
        );
    } 

    return (
        <S.Dropdown className="dropdown">
            {Object.entries(supportedLangs).map(
                ([code, name]) => (
                    <DropdownItem leftIcon="😋" rightIcon="" key={code} code={code}>
                        {name}
                    </DropdownItem>
                ),
            )}
        </S.Dropdown>
    );
}

export default DropdownMenu;