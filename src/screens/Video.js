import {
  Box, Container, darken, Typography, useTheme,
} from '@mui/material';

import STRINGS from '../constants/strings.json';

const VIDEO_STRINGS = STRINGS.Video;

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
        <Typography
          variant="h2"
        >
          {VIDEO_STRINGS.header_title}
            &nbsp;
          <span className="sketch-highlight" style={{ borderColor: theme.palette.primary.main }}>{VIDEO_STRINGS.header_title_box}</span>
        </Typography>
        <Typography
          variant="subtitle"
          color="primary"
          sx={{ pt: 3 }}
        >
          {VIDEO_STRINGS.header_subtitle}
        </Typography>
      </Box>
      <Container sx={{ height: '88%', mt: 10 }}>
        <Box
          sx={{
            zIndex: 2,
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              paddingY: 1,
              paddingX: 1,
              backgroundColor: darken(theme.palette.primary.main, 0.5),
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: { xs: 300, md: 315 * 1.5 },
              width: { xs: '90%', md: 560 * 1.5 },
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${VIDEO_STRINGS.source.split('?v=')[1]}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              allowFullScreen="true"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Content;
