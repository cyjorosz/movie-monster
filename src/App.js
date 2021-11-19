import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from 'components/Home/Home';
import Show from 'components/Shows/Show';

const App = () => {
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:id" element={<Show />} />
      </Routes>
  );
}

export default App;
