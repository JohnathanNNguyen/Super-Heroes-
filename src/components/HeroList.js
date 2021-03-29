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
  // const description = props.description.map(({ name }) => {
  //   return (
  //     <div>
  //       <h1>{name}</h1>
  //     </div>
  //   );
  // });

  return <div>{images}</div>;
};

export default HeroList;
