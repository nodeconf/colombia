import React from 'react';

import './index.scss';

const TopInfo = () => {
  return (
    <div className="top-info-component top-info">
      <div className="desc">
        <div className="data">
          <div>NodeConf</div>
          <div>Colombia 2019</div>
          <div>
            <button className="get-your-tickets">Get your tickets <span className="right-arrow">></span></button>
          </div>
        </div>
      </div>
      <div className="dates">
      </div>
    </div>
  )
}

export default TopInfo;
