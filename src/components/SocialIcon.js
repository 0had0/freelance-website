import { IconButton } from '@mui/material';

import PropTypes from 'prop-types';
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';

const ICONS = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: LinkedIn,
};

function SocialIcon({ name, source }) {
  const Component = ICONS[name.toLowerCase()];
  return (
    <IconButton
      sx={{
        width: '36px',
        height: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginX: 1,
      }}
      as="a"
      href={source}
      target="_blank"
      aria-label={name}
      size="large"
    >
      <Component sx={{ color: '#fff' }} size="large" />
    </IconButton>
  );
}

SocialIcon.propTypes = {
  name: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

SocialIcon.defaulProps = {};

export default SocialIcon;
