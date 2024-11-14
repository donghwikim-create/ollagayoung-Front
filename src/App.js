import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Carousel from './components/Carousel';
import Card from './components/LectureCard';
import LecturerList from './components/LecturerList';
import ScrollTop from './components/ScrollTop';
import Footer from './components/Footer';

function App() {
  
  return (
    <>
      <Header />
      <Carousel />
      <Card title="초심자 추천 리스트" />
      <Card title="이런 강의 어때요?" />
      <Card title="무료 강의 추천 리스트" />
      <LecturerList />
      <ScrollTop />
      <Footer />
    </>
  );
}

export default App;
