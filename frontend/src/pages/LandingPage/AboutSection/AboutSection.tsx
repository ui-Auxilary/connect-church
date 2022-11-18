import CommunityImg from 'assets/landing_page/community.jpeg';
import S from './styles';

const AboutSection = () => (
    <>
        <S.Container>
            <S.LeftImage src={CommunityImg}/>
            <S.Right>
                <S.ContentBlock>
                    <S.Title>About connect</S.Title>
                    <S.Slogan>We are a multicultural, family church.</S.Slogan>
                </S.ContentBlock>
                <S.AboutContent>
                    Whether you're single, married, have a young family, or you're a grandparent, you'll fit right in at Connect Church.
                    You'll find people who are passionate in worship, hear practical and relevant messages based on Biblical teaching, and an expectancy for a move of the Holy Spirit when we meet together.
                    Our meetings are engaging for the whole family, and we like to have fun together. Joy is an obvious feature in our church.
                    <br></br><br></br><br></br>Our meetings are hosted in English, Mandarin, and Nepali, and this is reflected in our worship, prayer and preaching.  
                </S.AboutContent>  
            </S.Right>
        </S.Container>
    </>
);

export default AboutSection;