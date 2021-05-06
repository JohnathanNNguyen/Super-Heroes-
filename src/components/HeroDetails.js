import React from 'react';

const HeroDetails = (props) => {
  const comics = props.comics.map((data) => {
    console.log('data', data);
    return <div>{data.title}</div>;
  });

  return <div>{comics}</div>;
};

export default HeroDetails;
