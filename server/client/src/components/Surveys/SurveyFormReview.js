import React from 'react';

const SurveyReview = ({ onCancel}) => {
  return (
    <div>
      SurveyReview
      <button
        className='yellow darken-3 btn-flat'
        onClick={onCancel}
      >
        Back
      </button>
    </div>
  );
};

export default SurveyReview;