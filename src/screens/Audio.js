import {
  Box, Container, Typography, useTheme,
} from '@mui/material';

import { PodcastsTwoTone } from '@mui/icons-material';

import MediaControlCard from '../components/MediaControlCard';

import STRINGS from '../constants/strings.json';
import DATA from '../constants/audio.json';

const PODCAST_STRINGS = STRINGS.podcast;

function Podcast() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        backgroundColor: theme.palette.secondary.main,
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >

      <Typography mt={4} variant="h2">
        {PODCAST_STRINGS.header_title}
            &nbsp;&nbsp;
        <PodcastsTwoTone color="primary" fontSize="inherit" />
      </Typography>

      <Typography color="primary" variant="body1" fontSize={20} mt={3}>
        {PODCAST_STRINGS.header_subtitle}
      </Typography>

      <Container sx={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 2 / 3,
        marginTop: 3,
      }}
      >
        {DATA.map(({
          id, source, title, description,
        }) => (
          <MediaControlCard
            key={id}
            id={id}
            source={source}
            title={title}
            description={description}
          />
        ))}
      </Container>
    </Box>
  );
}

export default Podcast;
