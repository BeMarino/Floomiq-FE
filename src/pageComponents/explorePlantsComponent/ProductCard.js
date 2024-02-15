import React from "react";
import { BsDropletFill } from "react-icons/bs";
import indoor_outdoor from "../../resources/images/indoor_outdoor.png"
import { MdHeight } from "react-icons/md";
import { RxWidth } from "react-icons/rx";
import { GiTreeGrowth, GiSandsOfTime } from "react-icons/gi";
import { IoIosPartlySunny } from "react-icons/io";
import CollapsablePlantDescription from "./collpsablePlantDescription";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";



class ProductCard extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <>
                <div className="product-card">
                    <div className="main">
                        <img src="Abelia_Edward_Goucher.jpeg" alt="Abelia Edward Goucher" id="main-image1" />
                        <button className="price" id="price1" ><GoPlus/></button>
                        <div className="details" id="details1">
                            {/* <div className="detail"><p className="type"><img src={indoor_outdoor} title="Environment" /></p>
                                <p className="description" >Outdoor</p>
                            </div> */}
                            <div className="detail"><p className="type"><MdHeight title="Height" /></p><p className="description">2m (max)</p></div>
                            <div className="detail"><p className="type"><GiTreeGrowth title="Height" /></p><p className="description">Moderate</p></div>
                            <div className="detail"><p className="type"><RxWidth title="Height" /></p><p className="description">2m (max)</p></div>
                            <div className="detail"><p className="type"><GiSandsOfTime title="Height" /></p><p className="description">Eternal</p></div>

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
}

export default ProductCard;