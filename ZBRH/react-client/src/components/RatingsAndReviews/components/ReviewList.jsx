import React from 'react';
import OneReview from './OneReview.jsx';

const ReviewList = (props) => (
  <div>
    {props.reviews.map((personReview, i) => {
      if(i <= props.page) {
      return <OneReview person={personReview} putHelpful={props.putHelpful} putReport={props.putReport} key={i} />;
      }
    })
    }
  </div>
);

export default ReviewList;