import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { API } from "../APIService/API";
import { Link } from "react-router-dom";
import { RiBook3Fill } from "react-icons/ri";
import { BiArrowFromLeft, BiArrowFromRight, BiCross, BiCrosshair } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

export default function Project() {

    const [project, setProject] = useState({ plants: [] })
    const [render, setRender] = useState(false)

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };
    const projectId = useQuery().get("name");
    const rimuoviPianta = (plant) => {
        console.log(project.plants)
        let plantSet = new Set(project.plants)
        plantSet.delete(plant)
        let plants = Array.from(plantSet)
        project.plants = plants
        //TODO: creare api per modifica progetto
        setProject(project)
        setRender(!render)
    }
    useEffect(() => {
        API.loadProject(projectId)
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data)
                    setProject(response.data);
                }
            })
            .catch((error) => {
            });
    }, [])

    return (
        <div className="flex flex-col justify-center px-[3%] mt-[5%] w-full mb-[5%]">
            <div className="flex flex-row w-full">
                <div className="flex w-1/3 mt-10 h-14">
                    <Link to="/my-projects" className="px-2.5 py-2.5 flex gap-2 mr-24 text-normal font-medium text-grey-700 items-center bg-grey-700 border-slate-500 border-2 hover:bg-gray-300 focus:ring-4
                 focus:outline-none focus:ring-blue-300 rounded-lg text-center">
                        <BiArrowFromRight />
                        I miei progetti
                        <RiBook3Fill />
                    </Link>
                </div>
                <div className="gap-4 flex flex-col py-7 w-1/3 justify-start ">
                    <div className="text-center font-bold text-4xl">{project.name}</div>
                    <div className="text-center font-light text-xl">{project.description}</div>
                </div>
                <div className="w-1/3"></div>
            </div>
            <div className=" rounded-md border-2 border-gray-500  px-6 divide-y-2 divide-gray-500">
                {project.plants.map((plant, index) =>
                (<div key={plant.name} className="flex flex-row pt-6 mb-6 w-full ">
                    <div className="w-1/6 h-[20vh] bg-cover bg-no-repeat rounded-md shadow-lg shadow-slate-700" style={{ "backgroundImage": plant.immagini[0] !== "" ? "url(" + plant.immagini[0] + ")" : "url(empty_plant.jpeg)" }}></div>
                    <div className="w-full  flex flex-col">
                        <div className="flex flex-col  w-full text-center text-pretty ">
                            <div className="text-center font-bold text-xl">{plant.nome}</div>
                            <div className="text-center font-light">{plant.nome}</div>
                        </div>
                        <div className="flex flex-row flex-wrap gap-y-6 w-full mt-7">

                            <div className=" w-1/5">
                                <div className="text-center font-bold">Tipo pianta</div>
                                <div className="text-center font-light text-sm">{plant.tipoPianta}</div>
                            </div>
                            <div className="w-1/5">
                                <div className="text-center font-bold ">Tipo terreno</div>
                                <div className="text-center font-light text-sm">{plant.tipoTerreno}</div>
                            </div>
                            <div className="w-1/5">
                                <div className="text-center font-bold ">Utilizzo ideale</div>
                                <div className="text-center font-light text-sm">{plant.utilizzoIdeale}</div>
                            </div>
                            <div className="w-1/5">
                                <div className="text-center font-bold ">Frutto edibile</div>
                                <div className="text-center font-light text-sm">{plant.fruttoEdibile}</div>
                            </div>
                            <div className="w-1/5">
                                <div className="text-center font-bold ">Periodo fioritura</div>
                                <div className="text-center font-light text-sm">{plant.periodoFioritura}</div>
                            </div>
                            <div className="w-1/5">
                                <div className="text-center font-bold ">Forma foglia</div>
                                <div className="text-center font-light text-sm">{plant.formaFoglia}</div>
                            </div>
                            <div className="w-1/5">
                                <div className="text-center font-bold ">Esposizione</div>
                                <div className="text-center font-light text-sm">{plant.esposizione}</div>
                            </div>
                            <div className="w-1/5">
                                <div className="text-center font-bold ">Altezza</div>
                                <div className="text-center font-light text-sm">{plant.altezza}</div>
                            </div>
                            <div className="w-1/5">
                                <div className="text-center font-bold ">Larghezza</div>
                                <div className="text-center font-light text-sm">{plant.larghezza}</div>
                            </div>
                            <div className="w-1/5">
                                <div className="text-center font-bold ">Ciclo di vita</div>
                                <div className="text-center font-light text-sm">{plant.cicloVita}</div>
                            </div>
                        </div>
                    </div>
                    <button className="px-2.5 py-2.5 h-14 self-center flex gap-2 text-normal font-medium text-grey-700 items-center bg-red-300 border-slate-500 border-2 hover:bg-red-600 focus:ring-4
                 focus:outline-none focus:ring-blue-300 rounded-lg text-center"
                 onClick={(e) => rimuoviPianta(plant)}>
                        Rimuovi pianta
                        <MdDelete size={"26px"}/>
                    </button>
                </div>))}
            </div>
        </div>
    )
}