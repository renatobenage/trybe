import './App.css';
import VideoGameList from './VideoGameList';
import data from './data';
import Footer from './Footer';

function App() {
  return (
    <div className="App">      
      <VideoGameList data={data}/>
      <Footer text={'Feito durante a aula ao vivo'} />
    </div>
  );
}

export default App;
