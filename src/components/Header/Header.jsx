import React, { useState } from "react";
import {
  Container,
  Navbar,
  Form,
  Nav,
  Button,
  InputGroup,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa"; // 돋보기 아이콘
import './Header.css';

function Header() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Navbar className="bg-body-tertiary p-3">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#">logo</Navbar.Brand>
        <Nav.Item>
          <span className="category">
            강의
            <div className="category-box">
              <ul>
                <li className="has-subcategory">
                  <a href="#" alt="웹 개발 카테고리 검색 페이지로 이동">
                    웹 개발
                  </a>
                  <div class="subcategory-box">
                    <ul>
                      <li>HTML & CSS</li>
                      <li>JavaScript</li>
                      <li>React</li>
                      <li>Vue.js</li>
                      <li>Node.js</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#" alt="웹 개발 카테고리 검색 페이지로 이동">
                    데이터 사이언스
                  </a>
                </li>
                <li>
                  <a href="#" alt="웹 개발 카테고리 검색 페이지로 이동">
                    마케팅
                  </a>
                </li>
                <li>
                  <a href="#" alt="웹 개발 카테고리 검색 페이지로 이동">
                    디자인
                  </a>
                </li>
                <li>
                  <a href="#" alt="웹 개발 카테고리 검색 페이지로 이동">
                    비즈니스
                  </a>
                </li>
              </ul>
            </div>
          </span>
        </Nav.Item>
        <InputGroup className="search-input-group">
          <Form.Control
            placeholder="강의를 검색해주세요"
            aria-label="강의 검색"
            aria-describedby="basic-addon1"
            value={inputValue}
            onChange={handleInputChange}
          />
          <Button
            variant="outline-secondary"
            id="button-addon1"
            disabled={!inputValue.trim()}
          >
            <FaSearch />
          </Button>
        </InputGroup>
        <Button className="login-btn">로그인</Button>
        <Button className="join-btn">회원가입</Button>
      </Container>
    </Navbar>
  );
}

export default Header;
