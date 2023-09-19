import './App.css';

function App() {
  const name = '리액트';

  return (
    <div className="react">
      {name === '리액트' && <h1>{name}</h1>}
    </div>
  );
}

export default App;
