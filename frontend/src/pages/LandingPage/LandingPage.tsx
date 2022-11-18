import {useSelector} from "react-redux";
import { selectLanguage } from "reducers/selectLanguageSlice";

import PageTemplate from "components/PageTemplate";
import BackgroundSlider from "components/BackgroundSlider";
import LanguageSelector from "components/LanguageSelector";
import DropdownMenu from "components/LanguageSelector/DropdownMenu";
import S from './style';

import LocationSection from "./LocationSection";
import AboutSection from "./AboutSection";
import CommunitySection from "./CommunitySection";

const LandingPage = () => {
  const t = useSelector(selectLanguage);

  return (
    <>
      <S.Wrapper>
        <PageTemplate>
            <BackgroundSlider />
            <S.HeroContent>
              {t.welcome}
              <S.Title>{t.connect}.</S.Title>
              <S.HeroSubContent>
                Join us Sundays, online or in Church
                <S.ButtonWrapper>
                  <S.HeroCTA style={{ "color": "#000", "background": "#fff"}}>View Location →</S.HeroCTA>
                  <S.HeroCTA>Watch Live →</S.HeroCTA>
                </S.ButtonWrapper>
              </S.HeroSubContent>
            </S.HeroContent>
            <S.Wave></S.Wave>
            <LanguageSelector icon="▲">
                <DropdownMenu />
            </LanguageSelector>
        </PageTemplate>
      </S.Wrapper>
      <LocationSection />
      <AboutSection />
      <CommunitySection />
    </>
  );
}

export default LandingPage;