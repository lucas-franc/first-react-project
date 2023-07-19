import React from 'react';
import Product from './Product';
import './App.css';

const App = () => {
  const [data, setData] = React.useState(null);
  const [load, setLoad] = React.useState(null);

  async function handleClick(event) {
    setLoad(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const json = await response.json();
    setData(json);
    setLoad(false);
  }

  return (
    <div>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        smartphone
      </button>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        tablet
      </button>
      {load && <p>Carregando...</p>}
      {!load && data && <Product data={data} />}
    </div>
  );
};

export default App;
