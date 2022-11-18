import { useState, useEffect } from "react";
import imageSlide from "./data";

import S from "./style";

const BackgroundSlider = () => {
    const [currSlide, setSlide] = useState(0);
    
    useEffect(() => {
        console.log('Current Slide ' + currSlide);
        const timer = setTimeout(() => {
            if (currSlide == 5) {
                setSlide(0);
            } else {
                setSlide(currSlide + 1);
            }
        }, 5000)
        return () => clearTimeout(timer);
    }, [currSlide]);

    return (
        <S.Container>
            <S.Overlay></S.Overlay>
            <S.Slides src={`${imageSlide[currSlide].url}`}/>
        </S.Container>
    );
}

export default BackgroundSlider;
