import S from './styles';
import DiscoverCard from './DiscoverCard';
const CommunitySection = () => (
    <>
        <S.Container>
            <S.Right>
                <S.Title>Discover your local community</S.Title>
            </S.Right>
            <S.CardContainer>
                <DiscoverCard />
                <DiscoverCard />
                <DiscoverCard />
            </S.CardContainer>
        </S.Container>
    </>
);

export default CommunitySection;