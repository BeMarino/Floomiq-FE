import { Link, useNavigate } from 'react-router-dom';

export default function DropDownRouter() {
    const navigate = useNavigate();
    
    return (
      <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" color='#a0df3b'>
                Plant Care
              </a>

              <div id="dropDown" className="navbar-dropdown">
                <a className="navbar-item" value ="/explore-plants" >
                 <Link to={"/explore-plants"}> Explore Plants</Link>
                </a>
                <a className="navbar-item" value ="#" >
                  Jobs
                </a>
                <a className="navbar-item"  value ="#" >
                <Link to={"#"}>Contact</Link>
                </a>
                <hr className="navbar-divider"/>
                  <a className="navbar-item">
                  <Link to={"#"}>Report an issue</Link>
                  </a>
              </div>
            </div>
        
    )
  }