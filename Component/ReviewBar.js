import React from 'react';
import style from '@/styles/ReviewBar.module.css';

const ReviewBar = ({ title, rating, color }) => {
  return (

    
      <div className={style.review_bar}>
        <div className={style.review_title}>{title}</div>
        <div className={style.review_bar_container}>
          <div className={style.review_bar_fill} style={{ width: `${rating * 10}%`, backgroundColor: color }}>
            <span className={style.review_rating}>{rating}</span>
          </div>
        </div>
      </div>


  );
};

export default ReviewBar;
