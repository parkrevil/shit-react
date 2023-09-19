function App() {
  const name = '리액트';

  return (
    <div style={{
      backgroundColor: '#000',
      color: '#fff',
      fontSize: '32px',
      fontWeight: 'bold',
      padding: '16px',
    }}>
      {name === '리액트' && <h1>리액트</h1>}
    </div>
  );
}

export default App;
