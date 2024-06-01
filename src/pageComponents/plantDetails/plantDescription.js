import React from "react"
import { Chip } from "@mui/material";
import styles from "../../css/PlantDetails.module.css";

export default function PlantDescription({ image, plantName, plantDescription, tags }) {
    image = `url('`+image+`')`;
    return (

        <>

            <div className={styles.plantName}>{plantName}</div>
            <div className={styles.plantDescription + "w-4/5 text-pretty"}>{plantDescription}</div>
            <div className={styles.plantTags}>
                {tags.map((value, _) =>
                    <Chip label={value} className={styles.plantTag} />
                )}
            </div>
            <div className={styles.plantImage} style={{ backgroundImage: image }}></div>

        </>
    )
}