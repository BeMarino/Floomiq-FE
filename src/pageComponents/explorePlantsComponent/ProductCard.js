import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { MdOutlineWbSunny } from "react-icons/md";
import { MdHeight } from "react-icons/md";
import { LiaThermometerHalfSolid } from "react-icons/lia";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../APIService/API";


export default function ProductCard({ product, addItemToCart, user, setShowErrorDialog, setLastFavourite, setShowLoginRequired }) {

    const [accordionOpen, setVisible] = useState(false);

    function addProduct() {
        addItemToCart(product);
    }

    function addToFavourite(event) {
        event.preventDefault();
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation()
        if (user === null) {
            setShowLoginRequired(true)            
            return
        }

        API.addToFavourite(user.username, product.id)
            .then((response) => {
                if (response.status === 200) {
                    // Authentication was successful
                    product.userFavourite = true;
                    setLastFavourite(product)
                } else {
                    setShowErrorDialog(true);
                }
            })
            .catch((err) =>
                setShowErrorDialog(true)
            )
    }

    function removeFromFavourite(event) {
        
        event.preventDefault();
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation()

        API.removeFromFavourite(user.username, product.id)
            .then((response) => {
                if (response.status === 200) {
                    // Authentication was successful
                    product.userFavourite = false;
                    setLastFavourite(null)
                } else {
                    setShowErrorDialog(true);
                }
            })
            .catch((err) =>
                setShowErrorDialog(true)
            )
    }

    let navigate = useNavigate();
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
                    <div style={{ "backgroundImage": imageUrl }} onClick={() => navigate("/plant-details?id=" + product.id)} className="image cursor-pointer hover:bg-lime-400 z-0" >
                        <button className={!product.userFavourite ? "addToFav bg-[#d7d7d7] hover:bg-lime-300":"addToFav bg-[#d7d7d7] hover:bg-red-600"} onMouseDown={e => e.stopPropagation()} onClick={(event) => {
                            !product.userFavourite? addToFavourite(event) : removeFromFavourite(event);
                        }}>{product.userFavourite ? <FaHeart size={"18px"} color="#7BC043" title="Rimuovi dai preferiti" /> : <CiHeart size={"23px"} title="Aggiungi ai preferiti" />}</button>
                    </div>
                    <button className="addToCart  bg-[#d7d7d7] hover:bg-lime-300" onClick={addProduct}><GoPlus /></button>
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
