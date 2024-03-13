import React from "react";
import { RxWidth } from "react-icons/rx";
import { GiTreeGrowth, GiSandsOfTime } from "react-icons/gi";
import { GoPlus } from "react-icons/go";
import { MdOutlineWbSunny } from "react-icons/md";
import { MdHeight } from "react-icons/md";
import { LiaThermometerHalfSolid } from "react-icons/lia";
import { GiSolidLeaf } from "react-icons/gi";




import { CiHeart } from "react-icons/ci";


export default function ProductCard({ product, addItemToCart, toggleCart, openSideCart }) {
    function addProduct() {

        if (openSideCart == false)
            toggleCart();

        addItemToCart(product);
    }

    let imageUrl = "url(" + product.image + ")";
    return (
        <>
            <div className="product-card">
                <div className="main">
                    <div style={{ "background-image": imageUrl }} className="image" >
                        <button className="addToFav" onClick={addProduct}><CiHeart /></button>
                    </div>
                    <button className="addToCart" onClick={addProduct}><GoPlus /></button>
                    <div className="plantName">{product.name}</div>
                    <div className="details" id="details1">
                        {/* <div className="detail"><p className="type"><img src={indoor_outdoor} title="Environment" /></p>
                                <p className="description" >Outdoor</p>
                            </div> */}
                        <div className="main-characteristic"><MdOutlineWbSunny title="Sun condition" /><a></a></div>
                        <div className="main-characteristic"><MdHeight title="Height" /><a>2m (max)</a></div>
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
