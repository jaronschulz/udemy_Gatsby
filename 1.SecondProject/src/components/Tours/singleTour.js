import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import { FaHome, FaMap } from 'react-icons/fa';
import styles from '../../css/tour.module.css';
import PropTypes from 'prop-types';

const SingleTour = ({ tour }) => {
  const { name, price, country, days, slug, images } = tour;
  const mainImage = images[0].fluid;
  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt={name} />
        <Link className={styles.link} to={`/tours/${slug}`}>
          details
        </Link>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {country}
          </h4>
          <div className={styles.details}>
            <h6>{days} days</h6>
            <h6>from ${price}</h6>
          </div>
        </div>
      </div>
    </article>
  );
};

SingleTour.propTypes = {
  tour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(propTypes.object).isRequired,
  }),
};

export default SingleTour;
