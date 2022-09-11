import PropTypes from 'prop-types';

import {
  Typography,
} from '@mui/material';

import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import MuiTimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

function TimelineContent({
  firstTitle,
  firstDescription,
  secondTitle,
  secondDescription,
  separator,
  direction,
}) {
  return (
    <TimelineItem position={direction}>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align={direction}
        variant="body2"
        color="text.secondary"
      >
        {firstTitle}
        <Typography>{firstDescription}</Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot>
          {separator}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <MuiTimelineContent sx={{ py: '12px', px: 2 }} position={direction}>
        <Typography variant="h6" component="span">
          {secondTitle}
        </Typography>
        <Typography>{secondDescription}</Typography>
      </MuiTimelineContent>
    </TimelineItem>
  );
}

TimelineContent.propTypes = {
  firstTitle: PropTypes.string.isRequired,
  firstDescription: PropTypes.string,
  secondTitle: PropTypes.string.isRequired,
  secondDescription: PropTypes.string,
  separator: PropTypes.elementType,
  direction: PropTypes.oneOf(['left', 'right']),
};

TimelineContent.defaultProps = {
  firstDescription: '',
  secondDescription: '',
  separator: null,
  direction: 'right',
};

export default TimelineContent;
