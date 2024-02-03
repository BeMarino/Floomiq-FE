import DatabaseExplorer from "../pageComponents/explorePlantsComponent/DatabaseExplorer";
import MonthFavorite from "../pageComponents/explorePlantsComponent/MonthFavorite";
import ReactDOM from 'react-dom/client';
import Curiosities from "../pageComponents/explorePlantsComponent/curiosities";

const ExplorePlants = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  return (<>
      <DatabaseExplorer/>
      <MonthFavorite/>
      <Curiosities />
  </>)
};

export default ExplorePlants;