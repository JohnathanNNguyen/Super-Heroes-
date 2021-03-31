import React from 'react';

const HeroList = (props) => {
  const images = props.images.map(({ id, thumbnail, name }) => {
    return (
      <img
        key={id}
        src={thumbnail.path + '.' + thumbnail.extension}
        alt={name}
      />
    );
  });

  return <div>{images}</div>;
};

export default HeroList;
