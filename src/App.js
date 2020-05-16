import React from 'react';
import Filters from './components/molecules/Filters';

function App() {
  const handleValues = values => {
    console.log(values);
  };

  return (
    <div className="App">
      <Filters
        filtersList={['Human', 'Mythology']}
        getSelectedFilter={handleValues}
        title="Species"
      />
    </div>
  );
}

export default App;
