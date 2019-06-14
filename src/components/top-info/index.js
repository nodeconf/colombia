import React from 'react';
import CountDown from '../countdown';

import './index.scss';

const TopInfo = () => {
  return (
    <div className="top-info-component top-info" id="home">
      <div className="desc">
        <div className="data">
          <div>NodeConf</div>
          <div>Colombia 2019</div>
          <div>
            <CountDown
              timeTillDate="06 21 2019" 
              timeFormat="MM DD YYYY, h:mm a"
            />
          </div>
        </div>
      </div>
      <div className="dates">
      </div>
    </div>
  )
}

export default TopInfo;
