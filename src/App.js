import './css/App.css';
import './css/ExplorePlants.css';
import ExplorePlants from './pages/ExplorePlants';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Footer from "./pageComponents/footer";
import Header from "./pageComponents/header";

function App() {
  return (

    <div className="App">
      <Header />
      <Routes>
        <Route path="/explore-plants" element={<ExplorePlants />} />
        <Route path="/gardening-tips" element={<ExplorePlants />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
