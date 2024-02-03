import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";


export default function DatabaseExplorer(){
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const toggleOpenTwo = () => {
    setOpenTwo(!openTwo);
  };
  const toggleOpenThree = () => {
    setOpenThree(!openThree);
  };


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
          <Link to="#" style={{ color: 'black' }}>All</Link>
          <Link to="#" style={{ color: 'black' }}>Flowering plants</Link>
          <Link to="#" style={{ color: 'black' }}>Succulents</Link>
          <Link to="#" style={{ color: 'black' }}>Indoor plants</Link>
          <div className="column-filter-spacer"></div>



          <div className="collapsable-filters">
            <div className="filter-type">
              Filter one
              <div>{open ? <IoIosArrowUp onClick={toggle} /> : <IoIosArrowDown onClick={toggle} />}</div>
              
            </div>
            {open && (
                <div className="options">
                  <div className="filters">
                    <div className="option">
                      <input type="checkbox" id="option-one" name="option-one" value="option-one"></input>
                      Option one
                    </div>
                    <div className="option">
                      <input type="checkbox" id="option-one" name="option-one" value="option-one"></input>
                      Option two
                    </div>
                    <div className="option">
                      <input type="checkbox" id="option-one" name="option-one" value="option-one"></input>
                      Option three
                    </div>
                    <div className="option">
                      <input type="checkbox" id="option-one" name="option-one" value="option-one"></input>
                      Option four
                    </div>
                  </div>
                </div>
              )}
              <div className="column-filter-spacer"></div>

          </div>
          <div className="collapsable-filters">
            <div className="filter-type">
              Filter Two
              <div>{openTwo ? <IoIosArrowUp onClick={toggleOpenTwo} /> : <IoIosArrowDown onClick={toggleOpenTwo} />}</div>
              
            </div>
            {openTwo && (
                <div className="options">
                  <div className="filters">
                    <div className="option">
                      <input type="checkbox" id="option-one" name="option-one" value="option-one"></input>
                      Option one
                    </div>
                    <div className="option">
                      <input type="checkbox" id="option-one" name="option-one" value="option-one"></input>
                      Option two
                    </div>
                    <div className="option">
                      <input type="checkbox" id="option-one" name="option-one" value="option-one"></input>
                      Option three
                    </div>
                    <div className="option">
                      <input type="checkbox" id="option-one" name="option-one" value="option-one"></input>
                      Option four
                    </div>
                  </div>
                </div>
              )}
              <div className="column-filter-spacer"></div>

          </div>
          <div className="collapsable-filters">
            <div className="filter-type">
              Filter one
              <div>{openThree ? <IoIosArrowUp onClick={toggleOpenThree} /> : <IoIosArrowDown onClick={toggleOpenThree} />}</div>
              
            </div>
            {openThree && (
                <div className="options">
                  <div className="filters">
                    <div className="option">
                      <input type="checkbox" id="option-one" name="option-one" value="option-one"></input>
                      Option one
                    </div>
                    <div className="option">
                      <input type="checkbox" id="option-one" name="option-one" value="option-one"></input>
                      Option two
                    </div>
                    <div className="option">
                      <input type="checkbox" id="option-one" name="option-one" value="option-one"></input>
                      Option three
                    </div>
                    <div className="option">
                      <input type="checkbox" id="option-one" name="option-one" value="option-one"></input>
                      Option four
                    </div>
                  </div>
                </div>
              )}
              <div className="column-filter-spacer"></div>

          </div>
        </div>
        <div className="results">
          <div className="no-results-found">
            <h4>No results found</h4>
          </div>
        </div>
      </div>
      </div>
      </>)
};