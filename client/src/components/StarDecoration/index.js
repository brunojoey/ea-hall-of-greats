import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import './StarDecoration.scss';

function StarDecoration() {
  return (
    <section className='fa-star-section'>
      <FontAwesomeIcon icon={faStar} className="fa-star" />
      <FontAwesomeIcon icon={faStar} className="fa-star" />
      <FontAwesomeIcon icon={faStar} className="fa-star" />
    </section>
  );
};

export default StarDecoration;
