import React from 'react';
import * as styles from './testimonial.module.scss';
import Slider from 'react-slick';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import { ImQuotesLeft } from 'react-icons/im';

const SampleNextArrow = props => {
  const { className, style, onClick } = props;
  return (
    <MdNavigateNext
      className={className}
      style={{ display: 'block', color: 'black' }}
      onClick={onClick}
      size={100}
    />
  );
};

const SamplePrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <MdNavigateBefore
      className={className}
      style={{ display: 'block', color: 'black' }}
      onClick={onClick}
      size={100}
    />
  );
};

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className={styles.testimonialContainer}>
      <h1>Testimonial</h1>

      <Slider {...settings} className={styles.sliderWrapper}>
        <div className={styles.sliderItemDiv}>
          <div className={styles.testImage}></div>

          <div className={styles.testDesc}>
            <div className={styles.quoteIcon}>
              <ImQuotesLeft size={25} />
            </div>
            <h3>Augusta Silve</h3>
            <h4>Sales Manager</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cumque sit soluta
              quod quidem. Unde aperiam culpa earum beatae animi hic, minus possimus eius dolor quos
              incidunt placeat voluptatum ipsum repudiandae quae. Deleniti at, laborum asperiores
            </p>
          </div>
        </div>

        <div className={styles.sliderItemDiv}>
          <div className={styles.testImage}></div>

          <div className={styles.testDesc}>
            <div className={styles.quoteIcon}>
              <ImQuotesLeft size={25} />
            </div>
            <h3>Augusta Silve</h3>
            <h4>Sales Manager</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cumque sit soluta
              quod quidem. Unde aperiam culpa earum beatae animi hic, minus possimus eius dolor quos
              incidunt placeat voluptatum ipsum repudiandae quae. Deleniti at, laborum asperiores
            </p>
          </div>
        </div>

        <div className={styles.sliderItemDiv}>
          <div className={styles.testImage}></div>

          <div className={styles.testDesc}>
            <div className={styles.quoteIcon}>
              <ImQuotesLeft size={25} />
            </div>
            <h3>Augusta Silve</h3>
            <h4>Sales Manager</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cumque sit soluta
              quod quidem. Unde aperiam culpa earum beatae animi hic, minus possimus eius dolor quos
              incidunt placeat voluptatum ipsum repudiandae quae. Deleniti at, laborum asperiores
            </p>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Testimonial;
