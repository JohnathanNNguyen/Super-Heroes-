import React, { useEffect, useState } from 'react';
import './HeroList.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SuperHero from '../api/SuperHeroAPI';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroList = (props) => {
  const [comicsList, setComicsList] = useState([]);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  useEffect(() => {});
  const images = props.images.map(({ id, thumbnail, name }) => {
    if (
      thumbnail.path !==
      'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
    ) {
      return (
        <Col key={id}>
          <div data-aos="fade-up" className="img-container">
            <img
              className="hero-container"
              src={thumbnail.path + '.' + thumbnail.extension}
              alt={name}
            />
            <div className="overlay"></div>
          </div>
        </Col>
      );
    } else {
      return '';
    }
  });

  return (
    <div>
      <Row md={1} lg={2} xl={3}>
        {images}
      </Row>
    </div>
  );
};

export default HeroList;
