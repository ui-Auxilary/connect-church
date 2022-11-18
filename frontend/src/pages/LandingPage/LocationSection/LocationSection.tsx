import MapImage from 'assets/landing_page/mapimage.jpg';
import S from './styles';

const LocationSection = () => (
    <>
        <S.Container>
            <S.ImageOverlay></S.ImageOverlay>
            <S.MapImage src={MapImage} />
        </S.Container>
    </>
);

export default LocationSection;