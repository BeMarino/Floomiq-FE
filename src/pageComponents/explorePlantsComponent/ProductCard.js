import React, { useState } from "react";
import { RxWidth } from "react-icons/rx";
import { GiTreeGrowth, GiSandsOfTime } from "react-icons/gi";
import { GoPlus } from "react-icons/go";
import { MdOutlineWbSunny } from "react-icons/md";
import { MdHeight } from "react-icons/md";
import { LiaThermometerHalfSolid } from "react-icons/lia";

import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";


export default function ProductCard({ product, addItemToCart, toggleCart, openSideCart }) {

    const [accordionOpen, setVisible] = useState(false);

    function addProduct() {

        if (openSideCart == false)
            toggleCart();

        addItemToCart(product);
    }

    function toggleAccordion(e) {
        setVisible(!accordionOpen);
    }
    let imageUrl;
    if (product.immagini[0] === "") {
        imageUrl = "url(empty_plant.jpeg)";
    } else {
        imageUrl = "url(" + product.immagini[0] + ")";
    }

    return (
        <>
            <div className="product-card">
                <div className="main">
                    <Link to="/plant-details">
                        <div style={{ "backgroundImage": imageUrl }} className="image" >
                            <button className="addToFav" onClick={addProduct}><CiHeart /></button>
                        </div>
                    </Link>
                    <button className="addToCart" onClick={addProduct}><GoPlus /></button>
                    <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                        <h2 id={"accordion-flush-heading"}>
                            <button onClick={toggleAccordion} type="button" className="plantName flex items-center justify-between  w-11/12 rtl:text-right text-gray-500 dark:text-gray-400" aria-expanded="true" >
                                <span className="truncate" title={product.nome}>{product.nome}</span>
                                <svg data-accordion-icon className={accordionOpen ? "w-3 h-3 shrink-0" : "w-3 h-3 rotate-180 shrink-0"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                </svg>
                            </button>
                        </h2>
                        <div className={accordionOpen ? "" : "hidden"} aria-labelledby={"accordion-flush-heading"}>
                            <div className="py-2 border-b border-gray-200 dark:border-gray-700">
                                <p className="mx-2 text-xs text-left text-gray-500 dark:text-gray-400">{product.descrizione}</p>
                            </div>
                        </div>
                    </div>
                    <div className="details" id="details1">
                        {/* <div className="detail"><p className="type"><img src={indoor_outdoor} title="Environment" /></p>
                                <p className="description" >Outdoor</p>
                            </div> */}
                        <div className="main-characteristic"><MdOutlineWbSunny title="Sun condition" /><a></a></div>
                        <div className="main-characteristic"><MdHeight title="Height" /><a className="truncate" title={product.altezza}>{product.altezza}</a></div>
                        <div className="main-characteristic"><LiaThermometerHalfSolid title="LifeCycle" /><a>Eternal</a></div>
                        <div className="main-characteristic"><LiaThermometerHalfSolid title="Sun condition" /><a></a></div>
                        <div className="main-characteristic"><MdOutlineWbSunny title="Sun condition" /><a></a></div>
                        <div className="main-characteristic"><MdOutlineWbSunny title="Sun condition" /><a></a></div>
                        <div className="main-characteristic"><MdOutlineWbSunny title="Sun condition" /><a></a></div>
                        <div className="main-characteristic"><MdOutlineWbSunny title="Sun condition" /><a></a></div>
                    </div>
                </div>
            </div>
        </>
    )

}
