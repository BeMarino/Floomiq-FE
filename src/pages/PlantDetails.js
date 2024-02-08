import PlantDescription from "../pageComponents/plantDetails/plantDescription";
import { Component, React } from "react";
import styles from "../css/PlantDetails.module.css";
import PlantProperties from "../pageComponents/plantDetails/plantProperties";
import PlantCare from "../pageComponents/plantDetails/plantCare";

class PlantDetails extends Component {
    
    constructor(props) {
        super(props);
    }
    render() {
        
        return (
        <div className={styles.column}>
            <PlantDescription />
            <PlantProperties/>
            <PlantCare/>
            </div>
        )
    }
};

export default PlantDetails;