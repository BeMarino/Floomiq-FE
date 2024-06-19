import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { API } from "../APIService/API";
import { Link } from "react-router-dom";
import { RiBook3Fill } from "react-icons/ri";
import { BiArrowFromLeft, BiArrowFromRight, BiCross, BiCrosshair } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import LoginRequiredDialog from "../pageComponents/explorePlantsComponent/LoginRequiredDialog";

export default function Project() {

    const [project, setProject] = useState({ plants: [] })
    const [render, setRender] = useState(false)
    const [showDialog, setShowDialog] = useState(false)
    const Navigate = useNavigate();
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };
    const projectId = useQuery().get("name");

    const toggleDialog = (value) => {
        setShowDialog(value)
    }

    const cancellaProgetto = () => {
        API.cancellaProgetto(projectId)
            .then((response) => {
                if (response.status === 200) {
                    Navigate("/my-projects")
                }
            })
            .catch((error) => {
            });
    }

    const rimuoviPianta = (plant) => {
        console.log(project.plants)
        let plantSet = new Set(project.plants)
        plantSet.delete(plant)
        let plants = Array.from(plantSet)
        project.plants = plants
        //TODO: creare api per modifica progetto
        API.removeFromProject(projectId, plant.id)
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data)
                }
            })
            .catch((error) => {
            });

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
            <div className="flex flex-row w-full justify-between">
                <div className="flex w-full mt-10 h-14">
                    <Link to="/my-projects" className="px-2.5 py-2.5 flex gap-2 mr-24 text-normal font-medium text-grey-700 items-center bg-grey-700 border-slate-500 border-2 hover:bg-gray-300 focus:ring-4
                 focus:outline-none focus:ring-blue-300 rounded-lg text-center">
                        <BiArrowFromRight />
                        I miei progetti
                        <RiBook3Fill />
                    </Link>
                </div>
                <div className="gap-4 flex flex-col py-7 w-full justify-start ">
                    <div className="text-center font-bold text-4xl">{project.name}</div>
                    <div className="text-center font-light text-xl">{project.description}</div>
                </div>
                <div className="flex w-full mt-10 h-14 justify-end">
                    <button className="px-2.5 py-2.5 flex gap-2  text-normal font-medium text-grey-700 hover:text-white items-center bg-grey-700 border-slate-500 border-2 hover:bg-red-700 focus:ring-4
                 focus:outline-none focus:ring-red-700 rounded-lg text-center"
                        onClick={(e) => toggleDialog(true)}>
                        Elimina progetto
                        <MdDelete size={"26px"} />
                    </button>
                </div>
            </div>
            <div className=" rounded-md border-2 border-gray-500  px-6 divide-y-2 divide-gray-500">
                {project.plants.map((plant, index) =>
                (<div key={plant.name} className="flex flex-row pt-6 mb-6 w-full ">
                    <Link to={"/plant-details?id=" + plant.id} className="w-1/6 h-[20vh] bg-cover bg-no-repeat rounded-md shadow-lg cursor-pointer
                     shadow-slate-700" style={{ "backgroundImage": plant.immagini[0] !== "" ? "url(" + plant.immagini[0] + ")" : "url(empty_plant.jpeg)" }}
                    ></Link>
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
                        <MdDelete size={"26px"} />
                    </button>
                </div>))}
                

            </div>
            {showDialog &&

                <div className="absolute w-screen h-full top-0 self-center  backdrop-blur-lg items-center z-30" >
                    <div className="flex flex-row divide-x-2 divide-solid divide-emerald-500 py-2 w-1/2 mt-[10%] ml-[25%] border-solid border-2 border-slate-300	bg-white  rounded self-center">
                        <div className="bg-cover bg-no-repeat p-16" >
                            <img src="registration.svg" className="h-[128px] w-[128px]" ></img>
                        </div>
                        <div className="flex alert-white w-full ">
                            <div className="flex flex-col justify-between p-2">
                                <span className="flex font-medium text-3xl text-wrap">Sei sicuro?</span>
                                <span className="flex font-light text-left">Sei sicuro di voler cancellare il progetto?</span>
                                <div className="flex flex-row w-full justify-between">
                                    <button className="button border-black border-2 border-solid  button-sign-up
                                     text-balance text-red-700 hover:text-white hover:bg-red-700"
                                     onClick={cancellaProgetto}>
                                        Elimina
                                    </button>

                                    <button className='button border-black border-2 border-solid  button-sign-up bg-white hover:bg-green-400 text-black' onClick={() => toggleDialog(false)}>
                                        Annulla
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}