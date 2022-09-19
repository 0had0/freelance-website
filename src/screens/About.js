import {
  Box, Container, Typography, useTheme,
} from '@mui/material';

// import Person from '../components/Persone';

import STRINGS from '../constants/strings.json';
// import DATA from '../constants/about.json';

const ABOUT_STRINGS = STRINGS.About;

const TEXTS = ABOUT_STRINGS.about.split('\n');

function About() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: theme.palette.secondary.main,
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      <Container
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'right',
          maxWidth: '85%',
        }}
        dir="rtl"
      >
        {TEXTS.map((text) => (!text ? <br /> : (
          <Typography fontSize={20} sx={{ lineHeight: 1.5 }}>
            {text}
          </Typography>
        )))}

      </Container>
    </Box>
  );
}

export default About;
