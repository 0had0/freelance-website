import {
  Box, useTheme, Container, Typography,
} from '@mui/material';
import { Widget } from '@typeform/embed-react';

import SocialIcon from '../components/SocialIcon';

import STRINGS from '../constants/strings.json';
import SOCIAL_DATA from '../constants/social.json';

const CONTACT_US_DATA = STRINGS.ContactUs;

function ContactUs() {
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
      <Box sx={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', maxHeight: '400px', maxWidth: '400px', paddingTop: 7, flexDirection: 'column',
      }}
      >
        <Typography variant="subtitle1">
          {CONTACT_US_DATA.header_title}
        </Typography>
        <Box sx={{
          display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
        }}
        >
          {SOCIAL_DATA.map(({ name, source }, index) => (
            <SocialIcon
                // eslint-disable-next-line react/no-array-index-key
              key={index}
              name={name}
              source={source}
            />
          ))}
        </Box>
      </Box>
      <Container sx={{
        flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
      >
        <Widget id={CONTACT_US_DATA.typeform_id} style={{ width: '100%', height: '600px', backgroundColor: 'transparent' }} className="my-form" />
      </Container>
    </Box>
  );
}

export default ContactUs;
