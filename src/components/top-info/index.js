import React from 'react';

import './index.scss';

const TopInfo = () => {
  return (
    <div className="top-info-component top-info" id="home">
      <div className="desc">
        <div className="data">
          <div>NodeConf</div>
          <div>Colombia 2019</div>
          <div>
            <a href="https://ti.to/nodeconfco/2019" target="_blank" className="get-your-tickets" rel="noopener noreferrer">Get your tickets <span className="right-arrow">></span></a>
          </div>
        </div>
      </div>
      <div className="dates">
      </div>
    </div>
  )
}

export default TopInfo;
