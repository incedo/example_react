import logo from './logo.svg';
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Login />
        <Register />
      </main>
    </div>
  );
}

export default App;
