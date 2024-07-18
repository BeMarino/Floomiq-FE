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
import PrivateRoute from './privateRoute'
import Constant from './utils/constant';
import VerifyMail from './verifyMail';
import DatabaseExplorer from './pageComponents/explorePlantsComponent/DatabaseExplorer';
import DbDiscover from './pageComponents/home/DbDiscover';
import Discover from './pageComponents/home/Discover';
import Project from './pages/project';
import Tutorial from './pages/tutorial';
import Sidebar from './pageComponents/Sidebar';
import ScrollToTop from './utils/scrollToTop';
const onTouchStart = () => {
  localStorage.setItem(Constant.localStorageSessionStartKey, Date.now());
}


function App() {

  const [user, setUser] = useState(() => {
    // Initialize from localStorage
    return JSON.parse(localStorage.getItem(Constant.localStorageUserKey));
  });

  useEffect(() => {
    // Persist state changes to localStorage
    localStorage.setItem(Constant.localStorageUserKey, JSON.stringify(user));
  }, [user]);

  const navigate = useNavigate();

  const timerRef = useRef(null);
  const [sideCartProductList, setSideCartProductList] = useState([]);

  const [openHamburger, setOpenHamburger] = useState(false)


  useEffect(() => {
    const checkExpiration = () => {
      const storedData = localStorage.getItem(Constant.localStorageUserKey);
      const storedTimestamp = localStorage.getItem(Constant.localStorageSessionStartKey);

      if (storedData && storedTimestamp) {
        const timestamp = parseInt(storedTimestamp);
        // Check if one hour has passed
        console.log("checkMinute")
        if (Date.now() - timestamp > 1800000) {
          console.log("checkHour")
          localStorage.removeItem(Constant.localStorageUserKey);
          localStorage.removeItem(Constant.localStorageUserCredKey);
          localStorage.removeItem(Constant.localStorageSessionStartKey);
          navigate("/")
        } else {
        }
      }
    }
    checkExpiration(); // Check on mount

    // Set up a timer to periodically check for expiration
    timerRef.current = setInterval(checkExpiration, 60000); // Check every minute

    return () => {
      clearInterval(timerRef.current); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="App h-screen" onMouseDown={onTouchStart}>
      <Header user={user} setUser={setUser} setOpenHamburger={setOpenHamburger} openHamburger={openHamburger} />
      {openHamburger && <Sidebar setOpenHamburger={setOpenHamburger} openHamburger={openHamburger} user={user}/>}
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login user={user} setUser={setUser} />} />
        <Route path="/discover" element={<Tutorial />} />
        <Route path="/verify-mail" element={<VerifyMail />} />
        <Route path="/user-project" element={<Project />} />
        <Route path="/explore-plants" element={<DatabaseExplorer user={user} sideCartProductList={sideCartProductList} setSideCartProductList={setSideCartProductList} />} />
        <Route path="/gardening-tips" element={<ExplorePlants />} />
        <Route path="/plant-details" element={<PlantDetails />} />
        <Route path="/pdf" element={<CreatePdf />} />
        <Route path="/my-projects" element={<PrivateRoute> <UserProjects user={user}/> </PrivateRoute>} />
        <Route path="/my-favourites" element={<PrivateRoute> <UserFavourites /> </PrivateRoute>} />
        <Route path="/register" element={<Registration />} />
        <Route path="/personal-info" element={<PrivateRoute> <PersonalInfo user={user} setUser={setUser} /> </PrivateRoute>} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
