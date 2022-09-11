import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import PropTypes from 'prop-types';
import useAudioPlayer from '../hooks/useAudioPlayer';
import Bar from './Bar';

function MediaControlCard({
  id, title, description, source,
}) {
  const theme = useTheme();

  const {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
  } = useAudioPlayer(id);

  return (
    <Box
      className="media-card"
      sx={{
        display: 'flex',
        backgroundColor: theme.palette.secondary.main,
        maxWidth: '275px',
        padding: 2,
        paddingTop: 2,
        borderWidth: 6,
        margin: 4,
      }}
      elevation={0}
      dir="ltr"
    >
      <Box
        sx={{
          display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center',
        }}
      >
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '99%',
          height: '250px',
        }}
        >
          <AudioFileIcon sx={{ fontSize: 200, color: theme.palette.primary.main }} />
        </Box>
        <Box sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {description}
          </Typography>
        </Box>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio id={`audio-${id}`} preload="auto">
          <source src={source} />
          Your browser does not support the
          <code>audio</code>
          element.
        </audio>
        <Box sx={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', pl: 1, pb: 1,
        }}
        >
          <IconButton aria-label="play/pause" onClick={() => setPlaying((prevState) => !prevState)}>
            {playing
              ? (
                <PauseIcon
                  sx={{ height: 38, width: 38, color: '#fff' }}
                />
              )
              : (
                <PlayArrowIcon
                  sx={{ height: 38, width: 38, color: '#fff' }}
                />
              )}
          </IconButton>

        </Box>
        <Bar curTime={curTime} duration={duration} onTimeUpdate={(time) => setClickedTime(time)} />
      </Box>
    </Box>
  );
}

MediaControlCard.propTypes = {
  id: PropTypes.number.isRequired,
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MediaControlCard;
