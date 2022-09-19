import {
  Box, Typography, useTheme,
} from '@mui/material';

import MUITimeline from '@mui/lab/Timeline';

import TimelineContent from '../components/TimelineContent';

import STRINGS from '../constants/strings.json';
import DATA from '../constants/timeline.json';

const TIMELINE_STRINGS = STRINGS.Timeline;

function Timeline() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        display: 'flex',
        position: 'relative',
        backgroundColor: theme.palette.secondary.main,
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      <Box mt={4}>
        <Typography
          variant="h2"
        >
          {TIMELINE_STRINGS.header_title}
            &nbsp;
          <span className="sketch-highlight" style={{ borderColor: theme.palette.primary.main }}>{TIMELINE_STRINGS.header_title_box}</span>
        </Typography>
        <Typography
          variant="subtitle"
          color="primary"
        >
          {TIMELINE_STRINGS.header_subtitle}
        </Typography>
      </Box>
      <Box mt={6} sx={{ height: '88%', display: 'flex', justifyContent: 'center' }}>
        <MUITimeline position="alternate" dir="ltr">
          {DATA.map(({
            title,
            description,
            separator,
          }, index) => (
            <TimelineContent
                // eslint-disable-next-line react/no-array-index-key
              key={index}
              id={index}
              title={title}
              description={description}
              separator={separator}
              direction={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </MUITimeline>
      </Box>
    </Box>
  );
}

export default Timeline;
