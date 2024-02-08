import { Link, useNavigate } from 'react-router-dom';

export default function DropDownRouter() {
    const navigate = useNavigate();
    
    return (
      <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link" color='#a0df3b'>
                Plant Care
              </a>

              <div id="dropDown" class="navbar-dropdown">
                <a class="navbar-item" value ="/explore-plants" >
                 <Link to={"/explore-plants"}> Explore Plants</Link>
                </a>
                <a class="navbar-item" value ="#" >
                  Jobs
                </a>
                <a class="navbar-item"  value ="#" >
                <Link to={"#"}>Contact</Link>
                </a>
                <hr class="navbar-divider"/>
                  <a class="navbar-item">
                  <Link to={"#"}>Report an issue</Link>
                  </a>
              </div>
            </div>
        
    )
  }