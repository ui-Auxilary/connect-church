import {createSlice} from "@reduxjs/toolkit";
import { defaultLang, supportedLangs } from "config/lang_config";

const initialState = {
    lang: defaultLang,
    supportedLangs: {...supportedLangs},
    translations: {
        en: {
            home: "Home",
            services: "Services",
            welcome: "Welcome to",
            connect: "Connect Church",
            about: "About",
            give: "Give",
            contact: "Contact"
        },
        zn: {
            home: "主页",
            services: "事工",
            welcome: "欢饮 来到",
            connect: "连接教会",
            about: "认识我们",
            give: "十一奉献",
            contact: "联络"
        },
    }, 
};

export const languageSlice = createSlice({
    name: "languageSlice",
    initialState,
    reducers: {
        setLang: (state, action) => {
            state.lang = action.payload;
        }
    },
});

export const selectLanguage = (state: { languageSlice: { translations: { [x: string]: any; }; lang: string | number; }; }) => {
    console.log(state);
    return state.languageSlice.translations[state.languageSlice.lang];
};  

export const { setLang } = languageSlice.actions;
export default languageSlice.reducer;