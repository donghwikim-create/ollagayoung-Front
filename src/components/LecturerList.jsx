import React from "react";
import { Container } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import image1 from "../images/lecture1.jpg";

function lecturerList() {
  return (
    <Container>
      <div className="mb-3">
        <label className="list-title">강사들 추천 pick</label>
      </div>
      <div className="lecture-recommendation-List">
        <button className="all-carouse-button">
          <FaChevronLeft />
        </button>
        <div className="lecture-card">
          <div className="lecture">
            <img
              src={image1}
              className="Card-image-large"
              alt="Description of the image"
            />
            <div className="lecture-title">재대로 파는 html css</div>
            <div>이순신</div>
          </div>
        </div>
        <div className="lecture-card">
          <div className="lecture">
            <img
              src={image1}
              className="Card-image-large"
              alt="Description of the image"
            />
            <div className="lecture-title">재대로 파는 html css</div>
            <div>이순신</div>
          </div>
        </div>
        <div className="lecture-card">
          <div>
            <img
              src={image1}
              className="Card-image-large"
              alt="Description of the image"
            />
            <div className="lecture-title">재대로 파는 html css</div>
            <div>이순신</div>
          </div>
        </div>
        <button className="all-carouse-button">
          <FaChevronRight />
        </button>
      </div>
    </Container>
  );
}

export default lecturerList;
