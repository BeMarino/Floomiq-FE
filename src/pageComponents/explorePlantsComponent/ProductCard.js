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



class ProductCard extends React.Component {

    constructor(props) {
        super(props);
    }

    
    render() {
        
        return (
            <>
                <div className="product-card">
                    <div className="main">
                        <img src="Abelia Edward Goucher.jpeg" alt="Abelia Edward Goucher" id="main-image1" />
                        <div className="main-description">
                            <div><a id="main-h3">Caprifoliaceae </a></div>
                            <div><a id="main-h2">Edward Goucher pink abelia</a></div>
                            <CollapsablePlantDescription description ="Arbusto da fiore che in estate produce una ricca e prolungata fioritura color rosa, l'Abelia Edward Goucher viene utilizzata da sola o in gruppo per realizzare angoli fioriti, bordure, oppure piccole aiuole e tappezzamenti. Ha piccole foglie lucide, ovali e dentellate, di colore verde scuro che permangono sulla pianta tutto l'anno, anche se nei mesi più freddi l'abelia glandiflora perde una parte del suo fogliame. Fiorisce a fine estate con molti fiorellini rosa a forma di campana. L'Abelia Goucher forma colorate aiuole, da sola o con altri arbusti, ma viene coltivata benissimo anche in vaso o nelle fioriere, dove può vivere anche per un lungo periodo."/>
                            <div className="seeMoreBtn"><Link to="/plant-details" class="button is-primary" >See more details</Link></div>
                        </div>
                        <div className="main-characteristics">
                            <div className="main-characteristic">
                                <img src={indoor_outdoor} title="Environment"/>
                                <a >Outdoor</a>
                            </div>
                            <div className="main-characteristic"><MdHeight style={{marginTop:"10px"}} fontSize={"30px"} title="Height" /><a>2m (max)</a></div>
                            <div className="main-characteristic"><GiTreeGrowth style={{marginTop:"10px"}} fontSize={"30px"} title="Grow speed"/><a>Moderate</a></div>
                            <div className="main-characteristic"><RxWidth style={{marginTop:"10px"}} fontSize={"30px"}title="Width"/><a>2m (max)</a></div>
                            <div className="main-characteristic"><GiSandsOfTime style={{marginTop:"10px"}} fontSize={"30px"}title="LifeCycle"/><a>Eternal</a></div>
                            <div className="main-characteristic"><IoIosPartlySunny style={{marginTop:"10px"}} fontSize={"30px"}title="Sun condition"/><a>Partial sunlight / full sunlight</a></div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ProductCard;