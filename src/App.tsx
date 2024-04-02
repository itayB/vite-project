import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/static/vite.svg'
import fastapiLogo  from '/static/fastapi.svg';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [health, setHealth] = useState('');

  useEffect(() => {
    const getStatus = async () => {
      const response = await fetch('/v1/health-check/liveness', {
        method: 'GET',
      });
      let status: { [status: string]: string } = {};
      try {
        status = await response.json();
      } catch (err) {
        console.log(`failed to get backend status. ${err}`);
      }
      setHealth(status['status'] || 'unknown');
    };
    getStatus();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://fastapi.tiangolo.com/" target="_blank">
          <img src={fastapiLogo} className="logo"/>
        </a>
      </div>
      <h1>Vite + React + FastAPI</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div>Backend Status: {health}</div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
