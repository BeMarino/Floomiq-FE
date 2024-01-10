import { useNavigate } from 'react-router-dom';

export default function DropDownRouter() {
    const navigate = useNavigate();
  
    function handleClick(event) {
        
      navigate(document.getElementById("dropDownRouter").value);
    }
  
    return (
        <select className='nav-select' id="dropDownRouter" name='Plant Care' defaultValue={"Plant Care"} onChange={handleClick}>
            <option value="Plant Care" disabled defaultValue={"Plant Care"} hidden >Plant Care</option>
            <option className='option' value="/explore-plants" href='.'> Explore Plants
              </option>
            <option className='option' value="/gardening-tips" href='.'>Garderning Tips
              </option>
          </select>
    )
  }