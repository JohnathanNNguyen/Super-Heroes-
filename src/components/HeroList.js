import React, { useEffect, useState } from 'react';
import './HeroList.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SuperHero from '../api/SuperHeroAPI';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useHistory } from 'react-router-dom';

const HeroList = (props) => {
  const history = useHistory();
  const [comicsList, setComicsList] = useState([]);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  // useEffect(() => {});

  const images = props.images.map(
    ({ id, thumbnail, name, comics }, index, data) => {
      const onGetComics = () => {
        setComicsList(data[index].comics.items);
        console.log('comicsList', comicsList);
        // history.push('/hero/details');
      };
      if (
        thumbnail.path !==
        'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
      ) {
        return (
          <Col key={index}>
            <div
              data-aos="fade-up"
              className="img-container"
              onClick={onGetComics}
            >
              <img
                className="hero-container"
                src={thumbnail.path + '.' + thumbnail.extension}
                alt={name}
              />
              <h3>{name}</h3>
              <div className="overlay"></div>
            </div>
          </Col>
        );
      } else {
        return '';
      }
    }
  );

  return (
    <div>
      <Row md={1} lg={2} xl={3}>
        {images}
      </Row>
    </div>
  );
};

export default HeroList;
