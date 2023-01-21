import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/card.scss';

const Card = (props) => {
  const { data } = props;
  return (
    <div className="card-item">
      <div className="card-inner">
        <div className="card-top">
          <img src={data.Poster} alt={data.Title} />
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
};

export default Card;
