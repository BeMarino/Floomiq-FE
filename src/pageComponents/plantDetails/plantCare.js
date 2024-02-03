import React from "react"
import styles from "../../css/PlantDetails.module.css";

export default function PlantCare() {
    const image = `url('https://cdn.manomano.com/media/edison/4/d/4/2/4d4272c3aff6.jpg')`;
    return (

        <>
            <div className={styles.plantCare}>
                <div className={styles.careInstructions}>
                    <div>
                        <div className={styles.heading}>Plant care instructions</div>
                        <div className={styles.subHeading}>Learn how to properly take care of this plant.</div>
                    </div>
                    <div className={styles.sunWaterInstruction}>
                        <div className={styles.instruction}>
                            <h1>Sunlight</h1>
                            <span>
                                This plant thrives in bright, indirect sunlight. Avoid direct sunlight.
                            </span>
                        </div>
                        <div className={styles.instruction}>
                            <h1>Watering</h1>
                            <span>
                                Water this plant once a week, allowing the soil to dry out between waterings.
                            </span>
                        </div>

                    </div>
                </div>
                <div className={styles.careInstructions}>
                    <div className={styles.plantCareImage} style={{ backgroundImage: image }}>
                    </div>
                </div>

            </div>
        </>
    )
}