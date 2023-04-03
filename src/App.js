import logo from './logo.svg';
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Login />
        <Register />
      </header>
    </div>
  );
}

export default App;
