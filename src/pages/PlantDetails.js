import PlantDescription from "../pageComponents/plantDetails/plantDescription";
import { Component, React, useEffect, useState } from "react";
import styles from "../css/PlantDetails.module.css";
import PlantProperties from "../pageComponents/plantDetails/plantProperties";
import PlantCare from "../pageComponents/plantDetails/plantCare";
import { useLocation } from "react-router";
import { API } from "../APIService/API";

export default function PlantDetails() {

    const [plantDetails, setPlantDetails] = useState(null)
    const [call, setCall] = useState(null)

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };
    
    const id = useQuery().get("id");

    useEffect(() => {
        API.plantDetails(id)
            .then((response) => {
                if (response.status === 200) {
                    console.log(response)
                    setPlantDetails(response.data)
                    setCall(false)
                }
            })
            .catch((error) => {
            });
    },[call])

    return (
        <>
        {plantDetails && <div className={styles.column}>
            <PlantDescription  image={plantDetails.mainImage}  plantName={plantDetails.nomeItaliano} plantDescription={plantDetails.descrizione} tags={plantDetails.tagList} />
            <PlantProperties features={plantDetails.features} description={plantDetails.descrizioneBreve} images={plantDetails.immaginiCaratteristiche}/>
            <PlantCare manutenzione={plantDetails.istruzioniCura} sunLight={plantDetails.condizioneSole} water={plantDetails.irrigazione}/>
        </div>}</>
    )
}

