import './css/App.css';
import './css/ExplorePlants.css';
import ExplorePlants from './pages/ExplorePlants';
import { Routes, Route, useNavigate } from 'react-router';
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
import PersonalInfo from './pages/personalInfo';
import { useEffect, useRef, useState } from 'react';
import Constant from './utils/constant';
const onTouchStart = () => {
  localStorage.setItem('timestamp', Date.now());
}


function App() {
  const navigate = useNavigate();

  const timerRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem(Constant.localStorageUserKey) !== null
  );

  useEffect(() => {
    const checkExpiration = () => {
      const storedData = localStorage.getItem('user');
      const storedCred = localStorage.getItem('userCred');
      const storedTimestamp = localStorage.getItem('timestamp');

      if (storedData && storedTimestamp) {
        const timestamp = parseInt(storedTimestamp);
        // Check if one hour has passed
        if (Date.now() - timestamp > 3600000) {
          localStorage.removeItem('user');
          localStorage.removeItem('userCred');
          localStorage.removeItem('timestamp');
          navigate("/")
        } else {

        }
      }
    }
    checkExpiration(); // Check on mount

    // Set up a timer to periodically check for expiration
    timerRef.current = setInterval(checkExpiration, 600000); // Check every minute

    return () => {
      clearInterval(timerRef.current); // Cleanup on unmount
    };
  }, []);

  return (
      <div className="App" onMouseDown={onTouchStart}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/explore-plants" element={<ExplorePlants />} />
          <Route path="/gardening-tips" element={<ExplorePlants />} />
          <Route path="/plant-details" element={<PlantDetails />} />
          <Route path="/pdf" element={<CreatePdf />} />
          <Route path="/my-projects" element={isLoggedIn ? <UserProjects />:<Login/>} />
          <Route path="/my-favourites" element={isLoggedIn ? <UserFavourites />:<Login/>} />
          <Route path="/register" element={<Registration />} />
          <Route path="/personal-info" element={isLoggedIn ? <PersonalInfo />:<Login/>} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
