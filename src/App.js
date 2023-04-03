import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Login from './components/organisms/auth/Login';
import Register from './components/organisms/auth/Register';
import Menu from './components/organisms/Menu';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <header className="App-header">
          <h1>My Example React App</h1>
        </header>
        <main>
          <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
