import React, { useState } from 'react';

import { motion } from 'framer-motion';

import { Nav, Header, Container, CardGrid, Card } from './Elements';

import logo from './assets/logo.svg';
import sunset from './assets/sunset.jpg';
import beach from './assets/beach.jpg';
import cave from './assets/cave.jpg';
import mountain from './assets/mountain.jpg';

import './App.css';

function App() {

  const [value, setValue] = useState(0);
  const [isToggled, setToggle] = useState(1);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}>

      <Nav>
        <img src={logo} alt="Logo" />
      </Nav>

      <Container>

        <Header>
          <motion.h1 animate={{ opacity: isToggled, x: value + 'px' }}>Adventure Memories</motion.h1>

          <input
            type="range"
            min="-100"
            max="100"
            value={value}
            onChange={(e) => setValue(e.target.value)} />

          <button
            onClick={
              () => setToggle((prevValue) => prevValue ? 0 : 1)
            }>
            Toggle Header
          </button>
        </Header>

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
