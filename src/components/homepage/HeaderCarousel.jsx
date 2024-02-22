import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const HeaderCarousel = ({ banners }) => {
  return (
    <div className='mx-auto max-w-5xl'>
    <CarouselProvider
     naturalSlideWidth={840}
     naturalSlideHeight={250}
      totalSlides={banners?.length}
      isPlaying={true}
      infinite={true}
      className='w-full'
    >
      <Slider>
        {banners?.map((banner, index) => (
          <Slide index={index} key={banner.id}>
            <img src={banner.pcImageUrl} alt={banner.title} />
          </Slide>
        ))}
      </Slider>
      {/* <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext> */}
    </CarouselProvider>
    </div>
  );
};

export default HeaderCarousel;
