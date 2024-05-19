import { Navigate, useLocation } from "react-router";
import Constant from "./utils/constant";

const PrivateRoute = (props) =>{
    const { children } = props
    const isLoggedIn = localStorage.getItem(Constant.localStorageUserKey) !== null;
    const location = useLocation()
  
    return isLoggedIn ? (
      <>{children}</>
    ) : (
      <Navigate
        replace={true}
        to="/login"
        state={{ from: `${location.pathname}${location.search}` }}
      />
    )
  }

  export default PrivateRoute;