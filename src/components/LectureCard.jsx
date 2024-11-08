import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import image1 from "../images/lecture1.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Card({ title }) {

  return (
    <Container className="p-3 mb-3">
      <div className="mb-3">
        <label className="lecture-list-title">
          {title}
        </label>
      </div>
      <div className="lecture-list">
        <button className="all-carouse-button">
          <FaChevronLeft />
        </button>
        <div className="lecture">
          <img
            src={image1}
            className="Card-image"
            alt="Description of the image"
          />
          <div className="lecture-title">재대로 파는 html css</div>
          <div>이순신</div>
          <div>
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            4.9 (77)
          </div>
          <div className="lecture-price">55,000원</div>
        </div>
        <div className="lecture">
          <img
            src={image1}
            className="Card-image"
            alt="Description of the image"
          />
          <div className="lecture-title">재대로 파는 html css</div>
          <div>이순신</div>
          <div>
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            4.9 (77)
          </div>
          <div className="lecture-price">55,000원</div>
        </div>
        <div className="lecture">
          <img
            src={image1}
            className="Card-image"
            alt="Description of the image"
          />
          <div className="lecture-title">재대로 파는 html css</div>
          <div>이순신</div>
          <div>
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            4.9 (77)
          </div>
          <div className="lecture-price">55,000원</div>
        </div>
        <div className="lecture">
          <img
            src={image1}
            className="Card-image"
            alt="Description of the image"
          />
          <div className="lecture-title">재대로 파는 html css</div>
          <div>이순신</div>
          <div>
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            4.9 (77)
          </div>
          <div className="lecture-price">55,000원</div>
        </div>
        <div className="lecture">
          <img
            src={image1}
            className="Card-image"
            alt="Description of the image"
          />
          <div className="lecture-title">재대로 파는 html css</div>
          <div>이순신</div>
          <div>
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            4.9 (77)
          </div>
          <div className="lecture-price">55,000원</div>
        </div>
        <button className="all-carouse-button">
          <FaChevronRight />
        </button>
      </div>
    </Container>
  );
}

export default Card;
