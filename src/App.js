import './css/App.css';
import './css/ExplorePlants.css';
import ExplorePlants from './pages/ExplorePlants';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Footer from "./pageComponents/footer";
import Header from "./pageComponents/header";
import PlantDetails from './pages/PlantDetails';

function App() {
  return (

    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore-plants" element={<ExplorePlants />} />
        <Route path="/gardening-tips" element={<ExplorePlants />} />
        <Route path="/plant-details" element={<PlantDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
