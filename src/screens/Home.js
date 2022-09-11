import { Box, Typography, useTheme } from '@mui/material';

import STRINGS from '../constants/strings.json';

const HOME_STRINGS = STRINGS.Home;

function Home() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          opacity: 0.8,
          filter: 'blur(2px)',
        }}
      >
        <div style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/tyre.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100%', width: '100%',
        }}
        />
      </Box>
      <Box sx={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
      >
        <Box sx={{
          flex: 1 / 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        }}
        >
          <Typography variant="h1">{HOME_STRINGS.header_title}</Typography>
          <Typography variant="subtitle1" sx={{ marginTop: 3 }}>{HOME_STRINGS.header_subtitle}</Typography>
        </Box>
        <Box sx={{
          maxWidth: '80%', maxHeight: '60%', flex: 3 / 4, overflowY: 'scroll',
        }}
        >
          <Box sx={{ position: 'relative', padding: 1 }}>
            <Box sx={{
              zIndex: -1, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: theme.palette.secondary.main, opacity: 0.2,
            }}
            />
            <Typography sx={{ zIndex: 3, textAlign: 'right' }} variant="body1">{HOME_STRINGS.header_description}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
