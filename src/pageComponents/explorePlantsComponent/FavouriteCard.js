import React, { useState } from "react";
import { RxWidth } from "react-icons/rx";
import { GiTreeGrowth, GiSandsOfTime, GiCherry } from "react-icons/gi";
import { GoPlus } from "react-icons/go";
import { MdOutlineWbSunny } from "react-icons/md";
import { MdHeight } from "react-icons/md";
import { LiaThermometerHalfSolid } from "react-icons/lia";

import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoFlowerSharp } from "react-icons/io5";
import { PiTreeBold } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { API } from "../../APIService/API";


export default function FavouriteCard({ product, addItemToCart, toggleCart, openSideCart , user, setShowErrorMessage, setErrorMessage, removeFromList}) {

    const [accordionOpen, setVisible] = useState(false);
    console.log(product)
    function addProduct() {

        if (openSideCart === false)
            toggleCart();

        addItemToCart(product);
    }

    function toggleAccordion(e) {
        setVisible(!accordionOpen);
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
                    removeFromList(product)
                } else {
                    setErrorMessage(response.body)
                    setShowErrorMessage(true);
                }
            })
            .catch((err) =>
                setShowErrorMessage(true)
            )
    }

    return (
        <div className="fav-card">
            <div className="main">
                <Link to={"/plant-details?id=" + product.id} style={{ "backgroundImage": product.immagini[0] !== "" ? "url(" + product.immagini[0] + ")" : "url(empty_plant.jpeg)" }} className="image" >
                <button className={!product.userFavourite ? "addToFav bg-[#d7d7d7] hover:bg-lime-300":"addToFav bg-[#d7d7d7] hover:bg-red-600"} onMouseDown={e => e.stopPropagation()} onClick={(event) => {
                            removeFromFavourite(event);
                        }}><FaHeart size={"18px"} color="#7BC043" title="Rimuovi dai preferiti" /></button>
                </Link>
                <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                    <h2 id={"accordion-flush-heading"}>
                        <button onClick={toggleAccordion} type="button" className="plantName flex items-center justify-between  w-11/12 rtl:text-right text-gray-500 dark:text-gray-400" aria-expanded="true" >
                            <span className="truncate">{product.nome}</span>
                            <svg data-accordion-icon className={accordionOpen ? "w-3 h-3 shrink-0" : "w-3 h-3 rotate-180 shrink-0"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div className={accordionOpen ? "" : "hidden"} aria-labelledby={"accordion-flush-heading"}>
                        <div className="py-2 border-b border-gray-200 dark:border-gray-700">
                            <p className="mx-2 text-xs text-left text-gray-500 dark:text-gray-400">L’acero è un albero presente in molte varietà, alcune caratterizzate da spettacolari chiome rosse che le rendono particolarmente apprezzate a scopo ornamentale. Si tratta di un albero splendido, rustico e resistente, semplice da coltivare in giardino e in vaso.</p>
                        </div>
                    </div>
                </div>
                <div className="details" id="details1">
                    {/* <div className="detail"><p className="type"><img src={indoor_outdoor} title="Environment" /></p>
                                <p className="description" >Outdoor</p>
                            </div> */}
                    <div className="main-characteristic"><MdOutlineWbSunny title="Condizione sole" color="black" size={"20px"} /><a className="truncate rounded-xl px-1 border-solid border border-gray-500">{product.esposizione.split(",")[0]}</a></div>
                    <div className="main-characteristic"><MdHeight title="Altezza" color="black" size={"20px"} /><a className="truncate rounded-xl px-1 border-solid border border-gray-500">{product.altezza.split(/,(?!\d)/)[0].replaceAll("\"", "")}</a></div>
                    <div className="main-characteristic"><LiaThermometerHalfSolid title="Ph terreno" color="black" size={"20px"} /><a className="truncate rounded-xl px-1 border-solid border border-gray-500">{product.phTerreno.split(",")[0]}</a></div>
                    <div className="main-characteristic"><IoFlowerSharp title="Fioritura" color="black" size={"20px"} /><a className="truncate rounded-xl px-1 border-solid border border-gray-500">{product.periodoFioritura.split(",")[0]}</a></div>
                    <div className="main-characteristic"><PiTreeBold title="Sun condition" color="black" size={"20px"} /><a className="truncate rounded-xl px-1 border-solid border border-gray-500">{product.tipoPianta.split(",")[0]}</a></div>
                    <div className="main-characteristic"><GiCherry title="Sun condition" color="black" size={"20px"} /><a className="truncate rounded-xl px-1 border-solid border border-gray-500">{product.periodoFruttificazione.split(",")[0]}</a></div>

                </div>
            </div>
        </div>
    )

}
