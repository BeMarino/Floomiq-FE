import React from "react"
import { Chip } from "@mui/material";
import styles from "../../css/PlantDetails.module.css";

export default function PlantDescription() {
    const image=`url('https://cdn.manomano.com/media/edison/4/d/4/2/4d4272c3aff6.jpg')`;
    return (
        
        <>
            
                <div className={styles.plantName}>Monstera deliciosa</div>
                <div className={styles.plantDescription}>La Monstera deliciosa è una pianta d'appartamento facile da curare. Con le sue particolari foglie frastagliate, arreda qualsiasi ambiente.</div>
                <div className={styles.plantTags}>
                    <Chip label="Exotic" className={styles.plantTag}/>
                    <Chip label="Indoor" className={styles.plantTag}/>
                    <Chip label="Pet friendly" className={styles.plantTag}/>
                </div>
                <div className={styles.plantImage} style={{backgroundImage : image}}></div> 
            
        </>
    )
}