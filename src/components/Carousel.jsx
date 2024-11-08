
import React, { useState } from 'react';
import { Carousel,Container,Stack } from 'react-bootstrap';
import image1 from '../images/lecture1.jpg'; // 로컬 이미지 경로
import image2 from '../images/lecture2.jpg'; // 로컬 이미지 경로
import { FaChevronLeft, FaChevronRight, FaChevronDown } from "react-icons/fa";
import { MdPause } from 'react-icons/md'; // MdPause 아이콘 추가

const CarouselComponent = () => {
  const images = [
    { src: image1, link: 'https://example.com/image1' },
    { src: image2, link: 'https://example.com/image2' },
  ];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleDragStart = (e) => {
    e.preventDefault();
  };

  const handleDrag = (e) => {
    if (e.movementX < 0) {
      // 드래그 왼쪽
      setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    } else if (e.movementX > 0) {
      // 드래그 오른쪽
      setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }
  };

  return (
    <>
    <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
      {images.map((image, idx) => (
        <Carousel.Item key={idx} onDragStart={handleDragStart} onDrag={handleDrag}>
          <a href={image.link} target="_blank" rel="noopener noreferrer">
            <img 
            className="d-block w-100 img-fluid" 
            src={image.src} 
            alt={`Slide ${idx + 1}`}
            style={{ maxHeight: '400px' }}
            />
          </a>
        </Carousel.Item>
      ))}
    </Carousel>
    <Container>
        <Stack direction="horizontal" gap={3} className="p-3">
          <div className="pagenation-controller">
            <div className="index-wrapper">
            <span className="current-index">1</span>
            /
            <span className="total-index">2</span>
            </div>
          <div className="control-wrapper">
            <button onClick={handleDrag} className="prev-btn">
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
    </>
  );
};

export default CarouselComponent;