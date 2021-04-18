import React from 'react';

import LazyLoad from 'react-lazyload';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Flag = ({flag, name}) => {
  return (
    <div className="mb-12 sm:w-1/2 sm:mb-0">
      <LazyLoad
        placeholder={
          <Loader
            type="ThreeDots"
            color="#2B3945"
            width={150}
            height={150}
          />
        }
      >
        <img src={flag} alt={name} className="shadow-md" />
      </LazyLoad>
    </div>
  )
}

export default Flag;
