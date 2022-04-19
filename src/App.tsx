import React from 'react';

import Grid from './components/Grid';

function App() {
  const items = [
    { content: 'Beef' },
    { content: 'Pork' },
    { content: 'Chicken' },
    { content: 'Broccoli' },
    { content: 'Asparagus' },
    { content: 'Green Beans' },
  ];
  return (
    <div className="App">
      <Grid items={items} />
    </div>
  );
}

export default App;
