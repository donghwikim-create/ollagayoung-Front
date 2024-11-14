import React from "react";
import { Container, Stack } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight, FaChevronDown } from "react-icons/fa";
import { MdPause } from "react-icons/md"; // MdPause 아이콘 추가

// 로컬 저장소 이미지 임포트
import image1 from "../images/lecture1.jpg";
import image2 from "../images/lecture2.jpg";
import image3 from "../images/lecture3.jpg";

const CarouselComponent = () => {
  const images = [
    { src: image1, link: "https://example.com/image1" },
    { src: image2, link: "https://example.com/image2" },
    { src: image3, link: "https://example.com/image3" },
  ];

  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  // };

  // const handleDragStart = (e) => {
  //   e.preventDefault();
  // };

  // const handleDrag = (e) => {
  //   if (e.movementX < 0) {
  //     // 드래그 왼쪽
  //     setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  //   } else if (e.movementX > 0) {
  //     // 드래그 오른쪽
  //     setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  //   }
  // };

  return (
    <section>
      <Swiper
        spaceBetween={10} // 슬라이드 간의 간격 설정
        slidesPerView={2} // 한 번에 하나의 슬라이드만 보이게 설정
        pagination={{ clickable: true }} // 페이지네이션 클릭 가능 설정
        loop={true} // 무한 반복 설정
      >
        <SwiperSlide>
          <img src={image1} alt="Slide 1" className="aa" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="Slide 2" className="bb" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="Slide 3" className="cc" />
        </SwiperSlide>
      </Swiper>
      <Container>
        <Stack direction="horizontal" gap={3} className="p-3">
          <div className="pagenation-controller">
            <div className="index-wrapper">
              <span className="current-index">1</span>/
              <span className="total-index">2</span>
            </div>
            <div className="control-wrapper">
              <button className="prev-btn">
                <FaChevronLeft className="fa-chevron-left" />
              </button>
              <button className="pause-btn">
                <MdPause />
              </button>
              <button className="next-btn">
                <FaChevronRight />
              </button>
            </div>
          </div>
          <div className="vr" />
          <button className="carouse-button">이달의 할인</button>
          <button className="carouse-button">지금 참여하기</button>
          <button className="carouse-button">한정 혜택 받기</button>
          <button className="carouse-button">기회 잡으러 가기</button>
          <button className="carouse-button">오늘만 특별가</button>
          <button className="carouse-button">최대 할인 확인하기</button>
          <button className="carouse-button">이벤트 자세히 보기</button>
          <button className="all-carouse-button">
            <FaChevronDown />
          </button>
        </Stack>
      </Container>
    </section>
  );
};

export default CarouselComponent;
