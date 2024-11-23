import './App.css';

function App() {
  const webApp = window.Telegram.WebApp;
  webApp.setHeaderColor('#fffff')
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Drizo Manager App
        </p>
s        <a
          className="App-link"
          href="https://drizo.uz"
          rel="noopener noreferrer"
        >
          Our website
        </a>
      </header>
    </div>
  );
}

export default App;
