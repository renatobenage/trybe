import logo from './logo.svg';
import './App.css';
import HelloMyFriends from './components/HelloMyFriends';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloMyFriends />
        <HelloMyFriends />
        <a href="">learn react</a>
      </header>
    </div>
  );
}

export default App;
