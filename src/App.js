import React, { useState } from 'react';

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
    <div>
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
    </div>
  );
}

export default App;
