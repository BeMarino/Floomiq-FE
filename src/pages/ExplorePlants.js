import { Link } from "react-router-dom";


const ExplorePlants = () => {
  return (<>
    <div className="column">
      <div className="column-h3">Plant database</div>
      <div className="column-h5">Explore our vast plant section</div>
      <div className="row">
        <div className="filter-clear">
          <span>Filter</span>
          <button>Clear all</button>
        </div>
        <div className="tags-sort">
          <div className="tags"></div>
          <div className="sort">Sort by</div>
        </div>
      </div>
      <div className="row">
        <div className="filters-column">
        <Link to="#" style={{color: 'black'}}>All</Link>
        <Link to="#" style={{color: 'black'}}>Flowering plants</Link>
        <Link to="#" style={{color: 'black'}}>Succulents</Link>
        <Link to="#" style={{color: 'black'}}>Indoor plants</Link>
        <div className="column-filter-spacer"></div>
        </div>
        <div className="results"></div>
      </div>
    </div>

  </>);
};

export default ExplorePlants;