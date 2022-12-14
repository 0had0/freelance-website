import {
  Box, Container, Typography, useTheme,
} from '@mui/material';

import ContentItem from '../components/ContentItem';

import DATA from '../constants/content.json';
import STRINGS from '../constants/strings.json';

const CONTENT_STRINGS = STRINGS.Content;

function Content() {
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
        {Boolean(CONTENT_STRINGS.header_title) && (
        <Typography
          variant="h2"
        >
          {CONTENT_STRINGS.header_title}
              &nbsp;
          <span
            className="sketch-highlight"
            style={{ borderColor: theme.palette.primary.main }}
          >
            {CONTENT_STRINGS.header_title_box}
          </span>
        </Typography>
        )}
        {Boolean(CONTENT_STRINGS.header_subtitle) && (
        <Typography
          variant="subtitle"
          color="primary"
        >
          {CONTENT_STRINGS.header_subtitle}
        </Typography>
        )}
      </Box>
      <Container sx={{ height: '88%' }}>
        {DATA.map(({
          title,
          description,
          source,
          direction,
        }, index) => (
          <ContentItem
              // eslint-disable-next-line react/no-array-index-key
            key={index}
            title={title}
            description={description}
            source={source}
            direction={direction}
          />
        ))}
      </Container>
    </Box>
  );
}

export default Content;
