import React from 'react';
import PropTypes from 'prop-types';

import dayjs from 'dayjs';
import dayjsDuration from 'dayjs/plugin/duration';

import './Bar.css';
import { useTheme } from '@mui/material';

dayjs.extend(dayjsDuration);

function formatDuration(duration) {
  return dayjs
    .duration(duration, 'seconds')
    .format('mm:ss');
}

function Bar({ duration, curTime, onTimeUpdate }) {
  const theme = useTheme();
  const curPercentage = (curTime / duration) * 100;

  function calcClickedTime(e) {
    const clickPositionInPage = e.pageX;
    const bar = document.querySelector('.bar__progress');
    const barStart = bar.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    return timePerPixel * clickPositionInBar;
  }

  function handleTimeDrag(e) {
    onTimeUpdate(calcClickedTime(e));

    const updateTimeOnMove = (eMove) => {
      onTimeUpdate(calcClickedTime(eMove));
    };

    document.addEventListener('mousemove', updateTimeOnMove);

    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', updateTimeOnMove);
    });
  }

  return (
    <div className="bar">
      <span className="bar__time">{formatDuration(curTime)}</span>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        className="bar__progress"
        style={{
          background: `linear-gradient(to right, ${theme.palette.primary.main} ${curPercentage}%, white 0)`,
        }}
        onMouseDown={(e) => handleTimeDrag(e)}
      >
        <span
          className="bar__progress__knob"
          style={{ left: `${curPercentage - 2}%`, backgroundColor: theme.palette.primary.main }}
        />
      </div>
      <span className="bar__time">{formatDuration(duration)}</span>
    </div>
  );
}

Bar.propTypes = {
  duration: PropTypes.number.isRequired,
  curTime: PropTypes.number.isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
};

export default Bar;
