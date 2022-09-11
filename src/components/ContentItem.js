import {
  Box, darken, Typography, useTheme,
} from '@mui/material';
import PropTypes from 'prop-types';

const reverse = (value, direction) => `${value}${direction === 'left' ? '' : '-reverse'}`;

function ContentItem({
  title, description, source, direction = 'left',
}) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        height: 400,
        padding: 3,
        flexDirection: {
          xm: 'column',
          sm: 'column',
          md: reverse('row', direction),
          lg: reverse('row', direction),
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
          height: 400,
          width: 'auto',
          overflow: 'hidden',
          opacity: 0.8,
          filter: 'blur(2px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
      <Box
        sx={{
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-start',
          paddingLeft: 2,
        }}
      >
        <Typography variant="h3" color="white">
          <span className="sketch-highlight-subtitle">
            {title}
          </span>
        </Typography>
        <Typography sx={{ marginTop: 2, textAlign: 'start' }} variant="subtitle" color="white">
          {description}
        </Typography>
      </Box>

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
          }}
        >
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${source.split('?v=')[1]}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            allowFullScreen="true"
          />
        </Box>
      </Box>
    </Box>
  );
}

ContentItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['left', 'right']),
};

ContentItem.defaultProps = {
  direction: 'left',
};

export default ContentItem;
