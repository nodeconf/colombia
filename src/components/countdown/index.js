import React from 'react';
import moment from 'moment';

import './index.scss';

const SVGCircle = ({ radius }) => (
  <React.Fragment>
    <svg className='countdown-svg desktop'>
      <path fill="none" stroke="#53c75a" stroke-width="4" d={describeArc(50, 50, 48, 0, radius)} />
    </svg>
    <svg className='countdown-svg mobile'>
      <path fill="none" stroke="#53c75a" stroke-width="4" d={describeArc(42, 42, 40, 0, radius)} />
    </svg>
  </React.Fragment>
);

// From StackOverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}

const describeArc = (x, y, radius, startAngle, endAngle) => {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  var d = [
    'M',
    start.x,
    start.y,
    'A',
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y
  ].join(' ');

  return d;
}

// From StackOverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const mapNumber = (number, in_min, in_max, out_min, out_max) => {
  return (
    ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
}

export default class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: undefined,
      hours: undefined,
      minutes: undefined,
      seconds: undefined
    }
  }

  componentDidMount() {
    const { timeTillDate } = this.props;
    let then = moment(new Date(timeTillDate));
    let now = moment();
    let days = then.diff(now, 'days');
    
    if (days < 0) {
      this.setState({ days: '0', hours: '0', minutes: '0', seconds: '0' });
    } else {
      this.interval = setInterval(() => {
        then = moment(new Date(timeTillDate));
        now = moment();
        const countdown = moment(then - now).utc();
        days = then.diff(now, 'days');
        const hours = countdown.format('HH');
        const minutes = countdown.format('mm');
        const seconds = countdown.format('ss');
  
        this.setState({ days: days.toString(), hours, minutes, seconds });
      }, 1000);
    }
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;
    const daysRadius = mapNumber(days, 30, 0, 0, 360);
    const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
    const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
    const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

    if (!seconds) {
      return null;
    }

    return (
      <div className="countdown-timer">
        <div className='countdown-wrapper'>
          {days && (
            <div className='countdown-item'>
              <SVGCircle radius={daysRadius} />
              {days}
              <span>days</span>
            </div>
          )}
          {hours && (
            <div className='countdown-item'>
              <SVGCircle radius={hoursRadius} />
              {hours}
              <span>hours</span>
            </div>
          )}
          {minutes && (
            <div className='countdown-item'>
              <SVGCircle radius={minutesRadius} />
              {minutes}
              <span>minutes</span>
            </div>
          )}
          {seconds && (
            <div className='countdown-item'>
              <SVGCircle radius={secondsRadius} />
              {seconds}
              <span>seconds</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}
