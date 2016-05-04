import React, { PropTypes } from 'react';
import baobabReact from 'baobab-react/higher-order';

const Image = (props) => {
  if (props.url.slice(-5) === '.webm') {
    return (
      <video
        src={props.url}
        className="img-responsive"
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
    />
  );
};

Image.propTypes = {
  url: PropTypes.string.isRequired,
  description: PropTypes.string,
};

const Gallery = (props) => (
  <div className="container">
    <div className="row">
      {props.images.map((image, index) => (
        <div className="col-sm-4" key={index}>
          <Image url={image.url} description={image.description} />
        </div>
      ))}
    </div>
  </div>
);

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default baobabReact.branch({
  images: ['images'],
}, Gallery);
