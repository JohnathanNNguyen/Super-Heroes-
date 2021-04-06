import React, { useEffect } from 'react';
import './HeroList.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroList = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const images = props.images.map(({ id, thumbnail, name }) => {
    if (
      thumbnail.path !==
      'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
    ) {
      return (
        <Col key={id}>
          <div data-aos="fade-up" className="img-container">
            <img src={thumbnail.path + '.' + thumbnail.extension} alt={name} />
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
