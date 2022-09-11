import { Avatar, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

function Person({ source, name, description }) {
  return (
    <Box sx={{
      flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    }}
    >
      <Avatar sx={{ width: 128, height: 128 }} alt={name} src={source} />
      <Typography mt={4} variant="h5">{name}</Typography>
      <Typography variant="subtitle1">{description}</Typography>
    </Box>
  );
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Person;
