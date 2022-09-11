import {
  Box, Container, Typography, useTheme,
} from '@mui/material';

import Person from '../components/Persone';

import STRINGS from '../constants/strings.json';
import DATA from '../constants/about.json';

const ABOUT_STRINGS = STRINGS.About;

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
        position: 'relative',
        backgroundColor: theme.palette.secondary.main,
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      <Container sx={{
        height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 2 / 3,
      }}
      >
        {DATA.map(({ source, name, description }) => (
          <Person
            source={source}
            name={name}
            description={description}
          />
        ))}
      </Container>
      <Container sx={{ flex: 1 / 3 }}>
        <Typography>
          {ABOUT_STRINGS.about}
        </Typography>
      </Container>
    </Box>
  );
}

export default About;
