import PropTypes from 'prop-types';

import {
  Typography, useTheme,
} from '@mui/material';

import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import MuiTimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { useCallback, useState } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

function TimelineContent({
  // eslint-disable-next-line no-unused-vars
  id,
  title,
  description,
  separator,
  direction,
}) {
  const theme = useTheme();

  const [opacity, setOpacity] = useState(0);
  const onIntersect = useCallback((isIntersecting) => { setOpacity(+isIntersecting); }, []);

  const ref = useIntersectionObserver(onIntersect);

  const [first, last] = title.split(' - ');

  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <TimelineItem ref={ref} position={direction} sx={{ minHeight: 'unset', opacity, transition: 'opacity ease 1000ms' }}>
      <TimelineOppositeContent>
        <img
         // eslint-disable-next-line global-require,import/no-dynamic-require
          src={require(`../assets/timeline-${id + 1}.jpeg`)}
          style={{
            borderStyle: 'solid',
            borderWidth: 10,
            borderRadius: 15,
            borderColor: theme.palette.secondary.light,
            minHeight: '275px',
          }}
          width="90%"
          height="auto"
          alt={title}
        />
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot>
          {separator}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <MuiTimelineContent
        sx={{
          py: '12px', px: 2, m: 'auto 0',
        }}
        dir="rtl"
      >
        <Typography variant="h4" component="span">
          {first}
          {' - '}
          <span style={{ color: theme.palette.primary.main }}>{last}</span>
        </Typography>
        <Typography variant="body1" fontSize={20} mt={3}>{description}</Typography>
      </MuiTimelineContent>
    </TimelineItem>
  );
}

TimelineContent.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  separator: PropTypes.elementType,
  direction: PropTypes.oneOf(['left', 'right']),
};

TimelineContent.defaultProps = {
  separator: null,
  direction: 'right',
};

export default TimelineContent;
