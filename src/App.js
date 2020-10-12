import React from 'react';

const styles = {
  textAlign: 'center',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textTransform: 'uppercase'
};
function App() {
  return (
    <div className="App" style={styles}>
      <h1>This is the beginning of your first react library</h1>
      <h3>Import your component here</h3>  
    </div>
  );
}

export default App;
