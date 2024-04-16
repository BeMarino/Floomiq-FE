import './css/App.css';
import './css/ExplorePlants.css';
import ExplorePlants from './pages/ExplorePlants';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Footer from "./pageComponents/footer";
import Header from "./pageComponents/header";
import PlantDetails from './pages/PlantDetails';
import CreatePdf from './utils/pdf';
// Supports weights 100-900
import '@fontsource-variable/inter';
import Login from './pages/login';
import UserProjects from './pages/UserProjects';
import PageNotFound from './pages/404';
import UserFavourites from './pages/UserFavourites';
import Registration from './pages/Registration';

function App() {
  return (

    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore-plants" element={<ExplorePlants />} />
        <Route path="/gardening-tips" element={<ExplorePlants />} />
        <Route path="/plant-details" element={<PlantDetails />} />
        <Route path="/pdf" element={<CreatePdf />} />
        <Route path="/my-projects" element={<UserProjects/>} />
        <Route path="/my-favourites" element={<UserFavourites/>} />
        <Route path="/register" element={<Registration/>} />
        <Route path="/*" element={<PageNotFound/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
