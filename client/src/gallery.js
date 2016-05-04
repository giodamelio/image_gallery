import React, { PropTypes } from 'react';
import baobabReact from 'baobab-react/higher-order';
import { chunk } from 'lodash';

const Image = (props) => {
  if (props.url.slice(-5) === '.webm') {
    return (
      <video
        src={props.url}
        className="img-responsive"
        title={props.description}
        autoPlay
        autostart
        loop
      >{"You're web browser does not support webm"}</video>
    );
  }

  return (
    <img
      src={props.url}
      className="img-responsive"
      alt={props.description}
      title={props.description}
    />
  );
};

Image.propTypes = {
  url: PropTypes.string.isRequired,
  description: PropTypes.string,
};

const Gallery = (props) => (
  <div className="container">
    {chunk(props.images, 3).map((images, outerIndex) => (
      <div className="row" key={outerIndex}>
        {images.map((image, innerIndex) => (
          <div className="col-sm-4" key={innerIndex}>
            <h4>{image.description}</h4>
            <Image
              url={image.url}
              description={image.description}
            />
          </div>
        ))}
      </div>
    ))}
  </div>
);

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default baobabReact.branch({
  images: ['images'],
}, Gallery);
