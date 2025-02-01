import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import '../../styles/custom-swiper.css'

const ImageSlider = ({ photos }) => {
  if (!photos || photos.length === 0) return null;
  
  const swiperRef = useRef(null);
  return (
    <div className="relative w-full h-full">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        navigation={true}
        className="w-full h-full rounded-xl"
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <img
              src={photo}
              alt={`Slide ${index + 1}`}
              className="w-full h-full rounded-xl object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons - Unique for each slider */}
      {/* <button
        onClick={() => swiperRef.current?.swiper.slidePrev()}
        className="prev absolute left-2  top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md z-[7]"
        aria-label="Previous slide"
      >
        <ChevronLeft size={13} className="text-gray-800" />
      </button>

      <button
        onClick={() => swiperRef.current?.swiper.slideNext()}
        className="next absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md z-[7]"
        aria-label="Next slide"
      >
        <ChevronRight size={13} className="text-gray-800" />
      </button> */}
    </div>
  );
};

export default ImageSlider;
