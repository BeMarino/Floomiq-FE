import './App.css';
import ExplorePlants from './pages/ExplorePlants';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';

function App() {
  return (

    <div className="App">

      <Routes>
        <Route path="/explore-plants" element={ <ExplorePlants />} />
        <Route path="/gardening-tips" element={ <ExplorePlants/>} />
        <Route path="/" element={ <Home/>} />
      </Routes>
     
    </div>
  );
}

export default App;
