import { Route, Routes } from 'react-router-dom';

import './App.css';

import { Box } from '@mui/material';

import Home from './screens/Home';
import About from './screens/About';
import Content from './screens/Content';
import Timeline from './screens/Timeline';
import Audio from './screens/Audio';

import Header from './components/Header';
import Video from './screens/Video';
import ContactUs from './screens/ContactUs';

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/content" element={<Content />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/podcast" element={<Audio />} />
          <Route path="/video" element={<Video />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
