import React, { useState, useRef } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import ProductCard from "./ProductCard";
import SideCart from "./sideCart";
import CreatePdf from "../../utils/pdf";
import { savePdf } from "../../utils/pdf";
import { IoMdSearch } from "react-icons/io";


let pdfRef = null;
export default function DatabaseExplorer() {
  const ToPrinf = React.forwardRef((props, ref) => {
    return (
      <div ref={ref}>
        {<CreatePdf />}
      </div>
    );
  });
  pdfRef = useRef();
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const [filters, setFilters] = useState([]);

  const toggle = () => {
    setOpen(!open);
  };
  
  const toggleOpenTwo = () => {
    setOpenTwo(!openTwo);
  };
  
  const toggleOpenThree = () => {
    setOpenThree(!openThree);
  };

  function addToFilters(filter){
    let filtersSet = new Set([...filters,filter])
    setFilters(Array.from(filtersSet));
  };

  function removeFilter(filter){
    let filtersSet = new Set([...filters])
    filtersSet.delete(filter);
    setFilters(Array.from(filtersSet));
  }

  function clearFilter(){
    setFilters([]);
  }

  const productList = [{
    name: 'Abelia Edward Goucher',
    image: 'Abelia_Edward_Goucher.jpeg',
    height: "2m",
    durability: "Eternal"
  },
  {
    name: 'Abelia Edward Goucher',
    image: 'Abelia_Edward_Goucher.jpeg',
    height: "2m",
    durability: "Eternal"
  },
  {
    name: 'Abelia Edward Goucher',
    image: 'Abelia_Edward_Goucher.jpeg',
    height: "2m",
    durability: "Eternal"
  },
  {
    name: 'Abelia Edward Goucher',
    image: 'Abelia_Edward_Goucher.jpeg',
    height: "2m",
    durability: "Eternal"
  },
  {
    name: 'Abelia Edward Goucher',
    image: 'Abelia_Edward_Goucher.jpeg',
    height: "2m",
    durability: "Eternal"
  }, {
    name: 'Abelia Edward Goucher',
    image: 'Abelia_Edward_Goucher.jpeg',
    height: "2m",
    durability: "Eternal"
  }, {
    name: 'Abelia Edward Goucher',
    image: 'Abelia_Edward_Goucher.jpeg',
    height: "2m",
    durability: "Eternal"
  }, {
    name: 'Abelia Edward Goucher',
    image: 'Abelia_Edward_Goucher.jpeg',
    height: "2m",
    durability: "Eternal"
  }]


  const [sideCartProductList, setSideCartProductList] = useState([]);

  function addItemToCart(product) {
    setSideCartProductList([...sideCartProductList, product]);
  }

  function removeFromList(product) {
    sideCartProductList.splice(sideCartProductList.indexOf(product), 1);
    setSideCartProductList([...sideCartProductList]);
  }

  return (<div className="exploreContainer">
    <div className="column">
      <div className="row">
        <div className="filter-clear">

          <button onClick={((e) =>clearFilter())}>Clear all</button>
        </div>
        <div className="tags-sort">
          {filters.map((_, index) => (
            <span id="badge-dismiss-dark" className="inline-flex items-center px-2 py-1 me-2 text-xs font-normal text-gray-500 border-black border-2 rounded-full dark:bg-gray-700 dark:text-gray">
            {filters[index]}
            <button onClick={((e) =>removeFilter(filters[index]))} type="button" className="inline-flex items-center p-1 ms-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300" data-dismiss-target="#badge-dismiss-dark" aria-label="Remove">
              <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Remove badge</span>
            </button>
          </span>
          ))}
        </div>
        <div className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-gray-500 border-black border-2 rounded-full dark:bg-gray-700 dark:text-gray">
            Search<IoMdSearch size="20px" />
          </div>
      </div>
      <div className="row">
        <div className="filters-column">
          <span className="font-bold">Filter</span>
          <span className="filter" value="all" onClick={((e) => addToFilters("All"))}>All</span>
          <span className="filter" value="flowering" onClick={((e) => addToFilters("flowering"))}>Flowering plants</span>
          <span className="filter" value="succulent" onClick={((e) => addToFilters("succulent"))}>Succulents</span>
          <span className="filter" value="indoor" onClick={((e) => addToFilters("indoor"))}>Indoor plants</span>
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
          {productList.map((_, index) => (
            <ProductCard key={index}  product={productList[index]} addItemToCart={addItemToCart} />
          ))}
        </div>
        <SideCart  sideCartProductList={sideCartProductList} removeFromList={removeFromList} />

      </div>
      <ToPrinf ref={pdfRef} />
      <button onClick={savePdf}>download</button>

    </div>
  </div>)
};
