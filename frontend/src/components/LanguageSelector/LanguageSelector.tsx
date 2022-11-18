import { useSelector } from 'react-redux';
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useState } from 'react';
import { RootState } from 'store';

import S from './style';

const LanguageSelector = (props: { icon: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; children: any; }) => {
    const [open, setOpen] = useState(false);
    const lang = useSelector((state: RootState) => state.languageSlice.lang);

    return (
        <S.ListItem>
            <S.Link className="icon-button" onClick={() => setOpen(!open)}>
                select language: {lang}
                {props.icon}
            </S.Link>

            {open && props.children}
        </S.ListItem>
    );
}

export default LanguageSelector;