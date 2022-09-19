import {
  Box, Button, Typography, useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { ArrowForward } from '@mui/icons-material';
import STRINGS from '../constants/strings.json';

const HOME_STRINGS = STRINGS.Home;

function Home() {
  const theme = useTheme();
  const navigate = useNavigate();
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
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
      >
        <Box sx={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        }}
        >
          <Typography variant="h1">{HOME_STRINGS.header_title}</Typography>
          <Typography variant="subtitle1" sx={{ marginTop: 3 }}>{HOME_STRINGS.header_subtitle}</Typography>
        </Box>
        <Box sx={{
          maxWidth: '80%', maxHeight: '60%', overflowY: 'auto',
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
        <Box dir="ltr">
          <Button
            onClick={() => navigate('/timeline')}
            variant="outlined"
            color="primary"
            endIcon={<ArrowForward />}
            size="large"
            sx={{
              marginY: 4, color: '#fff', borderColor: '#fff', '&:hover': { backgroundColor: '#fff', color: theme.palette.secondary.main },
            }}
            disableRipple
            disableElevation
          >
            Start
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
