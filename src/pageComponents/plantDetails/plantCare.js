import React from "react"
import styles from "../../css/PlantDetails.module.css";

export default function PlantCare({image, manutenzione, sunLight, water}) {
    if(image != null){
        image = `url('`+image+`')`
    }
    console.log(image)
    return (

        <>
            <div className={styles.plantCare}>
                <div className={styles.careInstructions +image == null ?"w-full justify-center items-center":""}>
                    <div className={image == null ?"w-full justify-center items-center":""}>
                        <div className={styles.heading}>Cura della pianta</div>
                        <div className={styles.subHeading}>{manutenzione}</div>
                    </div>
                    <div className={styles.sunWaterInstruction}>
                        <div className={styles.instruction}>
                            <h1>Esposizione solare</h1>
                            <span>
                                {sunLight}
                            </span>
                        </div>
                        <div className={styles.instruction}>
                            <h1>Irrigazione</h1>
                            <span>
                                {water}
                            </span>
                        </div>

                    </div>
                </div>
                {image && <div className={styles.careInstructions}>
                    <div className={styles.plantCareImage} style={{ backgroundImage: image }}>
                    </div>
                </div>}

            </div>
        </>
    )
}