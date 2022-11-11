import logo from './logo.svg';
import './App.css';
import Paintings from './components/paintings';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Paintings/>
      <p>"g check"</p>
    </div>
  );
}

export default App;
