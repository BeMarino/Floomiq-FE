import React from "react";
import { MdHeight } from "react-icons/md";
import { RxWidth } from "react-icons/rx";
import { GiTreeGrowth, GiSandsOfTime } from "react-icons/gi";
import { GoPlus } from "react-icons/go";


export default function ProductCard({ product , addItemToCart, toggleCart, openSideCart}) {
    function addProduct(){

        if(openSideCart ==false)
            toggleCart();
        
        addItemToCart(product);
    }


    return (
        <>
            <div className="product-card">
                <div className="main">
                    <img src={product.image} alt={product.name} id="main-image1" />
                    <button className="addToCart"  onClick={addProduct}><GoPlus /></button>
                    <div className="details" id="details1">
                        {/* <div className="detail"><p className="type"><img src={indoor_outdoor} title="Environment" /></p>
                                <p className="description" >Outdoor</p>
                            </div> */}
                        <div className="detail"><p className="type"><MdHeight title="Height" /></p><p className="description">{product.height}</p></div>
                        <div className="detail"><p className="type"><GiTreeGrowth title="Height" /></p><p className="description">Moderate</p></div>
                        <div className="detail"><p className="type"><RxWidth title="Height" /></p><p className="description">2m (max)</p></div>
                        <div className="detail"><p className="type"><GiSandsOfTime title="Height" /></p><p className="description">{product.durability}</p></div>

                        {/* <div className="main-characteristic"><GiTreeGrowth style={{ marginTop: "10px" }} title="Grow speed" /><a></a></div>
                            <div className="main-characteristic"><RxWidth style={{ marginTop: "10px" }} title="Width" /><a>2m (max)</a></div>
                            <div className="main-characteristic"><GiSandsOfTime style={{ marginTop: "10px" }} title="LifeCycle" /><a>Eternal</a></div>
                            <div className="main-characteristic"><IoIosPartlySunny style={{ marginTop: "10px" }} title="Sun condition" /><a>Partial sunlight / full sunlight</a></div>
                            */} </div>
                </div>
            </div>
        </>
    )

}
