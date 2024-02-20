import { Link } from "react-router-dom";
import React, { useState, useRef } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import ProductCard from "./ProductCard";
import SideCart from "./sideCart";
import { IoMdArrowDropleft } from "react-icons/io";

export default function DatabaseExplorer() {
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const [openSideCart, setOpenSideCart] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const toggleOpenTwo = () => {
    setOpenTwo(!openTwo);
  };
  const toggleOpenThree = () => {
    setOpenThree(!openThree);
  };

  const toggleCart = () => {
    setOpenSideCart(!openSideCart);
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
  }]



  const [sideCartProductList, setSideCartProductList] = useState([]);

  function addItemToCart(product) {
    setSideCartProductList([...sideCartProductList, product]);
  }

  function removeFromList(product) {
    sideCartProductList.splice(sideCartProductList.indexOf(product),1);
    setSideCartProductList([...sideCartProductList]);
  }

  return (<div className="exploreContainer">
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
          {productList.map((_, index) => (
            <ProductCard key={index} toggleCart={toggleCart} openSideCart={openSideCart} product={productList[index]} addItemToCart={addItemToCart} />
          ))}
        </div>
      </div>
    </div>
    <SideCart toggleCart={toggleCart} openSideCart={openSideCart} sideCartProductList={sideCartProductList} removeFromList={removeFromList}/>
  </div>)
};