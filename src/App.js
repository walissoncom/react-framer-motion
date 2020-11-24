import React, { useState } from 'react';

import { motion } from 'framer-motion';

import { Header, Container, CardGrid, Card } from './Elements';

import logo from './assets/logo.svg';
import sunset from './assets/sunset.jpg';
import beach from './assets/beach.jpg';
import cave from './assets/cave.jpg';
import mountain from './assets/mountain.jpg';

import './App.css';

function App() {

  const [value, setValue] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}>
      <Header>
        <img src={logo} alt="Logo" />
      </Header>
      <Container>
        <h1>Adventure Memories</h1>
        <CardGrid>
          <Card>
            <img src={sunset} alt="Sunset" />
            <h3>Sunset</h3>
          </Card>
          <Card>
            <img src={beach} alt="Beach" />
            <h3>Beach</h3>
          </Card>
          <Card>
            <img src={cave} alt="Cave" />
            <h3>Cave</h3>
          </Card>
          <Card>
            <img src={mountain} alt="Mountain" />
            <h3>Mountain</h3>
          </Card>
        </CardGrid>
      </Container>
    </motion.div>
  );
}

export default App;
