import React from 'react';
import { useLocation } from 'react-router-dom';

export const Result = function (props) {
  const location = useLocation();

  return (
    <div className="result-page">
      <h2>
        Welcome!, to <span className="page">{location.state.search}</span>
      </h2>
    </div>
  );
};
