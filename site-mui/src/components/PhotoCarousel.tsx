import ArrowBackIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const commonSxProps = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0,0,0,0.5)',
    '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    zIndex: 10,
    p: 1,
};

const PrevArrow = ({ onClick }: any) => (
    <IconButton
        onClick={onClick}
        sx={{
            ...commonSxProps,
            left: 8,
        }}
    >
        <ArrowBackIcon sx={{ color: 'white' }} />
    </IconButton>
);

const NextArrow = ({ onClick }: any) => (
    <IconButton
        onClick={onClick}
        sx={{
            ...commonSxProps,
            right: 8,
        }}
    >
        <ArrowForwardIcon sx={{ color: 'white' }} />
    </IconButton>
);

export const PhotoCarousel: React.FC = ({ ...props }) => {
    return (
        <Slider
            dots
            arrows
            infinite
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            prevArrow={<PrevArrow />}
            nextArrow={<NextArrow />}
            {...props}
        />
    );
}