import React, { useState } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from "react-router-dom";
import { API } from "../../APIService/API";
import ErrorDialog from "../ErrorDialog";
import { FaRegFilePdf } from "react-icons/fa6";


export default function ProjectCard({ project }) {

    const [accordionOpen, setVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const closeErrorDialog = () => {
        setShowErrorMessage(false)
    }

    function toggleAccordion(e) {
        setVisible(!accordionOpen);
    }
    let imageUrl;
    if (project.plants.length > 0 && project.plants[0].immagini.length > 0) {
        imageUrl = "url(" + project.plants[0].immagini[0] + ")";
    } else {
        imageUrl = "url(empty_plant.jpeg"
    }

    const downloadPdf = () => {
        setIsLoading(true)
        let plants = []

        let body = { name: project.name, plants: plants }

        API.downloadProjectPdf(project.name).then((response) => {
            console.log(response.data)
            const blob = new Blob([response.data], { type: 'application/pdf' });
            console.log(blob)
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', project.name);
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);

        }).catch(err => {
            console.log(err)
            setErrorMessage(err.response.data);
            setShowErrorMessage(true)
        }
        ).finally(() => {
            setIsLoading(false)
        })
    }
    return (
        <>
            <div className="project-card">
                <div className="main">
                    <div style={{ "backgroundImage": imageUrl }} className="image" >
                    </div>
                </div>
                <div className="flex flex-col w-full px-4 gap-2 justify-between bg-gray-100  pb-2 rounded-b-lg">
                    <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                        <h2 id={"accordion-flush-heading"}>
                            <button onClick={toggleAccordion} type="button" className="plantName flex items-center justify-between  w-11/12 rtl:text-right text-gray-500 dark:text-gray-400" aria-expanded="true" >
                                <span className="truncate" title={project.name}>{project.name}</span>
                                <svg data-accordion-icon className={accordionOpen ? "w-3 h-3 shrink-0" : "w-3 h-3 rotate-180 shrink-0"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                </svg>
                            </button>
                        </h2>
                        <div className={accordionOpen ? "" : "hidden"} aria-labelledby={"accordion-flush-heading"}>
                            <div className="py-2 border-b border-gray-200 dark:border-gray-700">
                                <p className="mx-2 text-xs text-left text-gray-500 dark:text-gray-400">{project.description}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between w-[95%] left-0 gap-2">
                        <div className="flex flex-row gap-2 pt-2">
                            <MdOutlineDateRange size="20px" className="ml-2 text-lg" />
                            <span className="text-sm">{project.creationDate}</span>
                        </div>
                        <div className="rounded-lg bg-gray-200 p-1 cursor-pointer hover:bg-gray-300">
                            <FaRegFilePdf size={"26px"} onClick={downloadPdf}></FaRegFilePdf></div>
                    </div>
                    <Link to={"/user-project?name=" + project.name} className="bg-[#E3F5FF] p-2 self-center w-11/12 text-sm rounded-lg hover:bg-[#DEFE9A]">
                        Vai al progetto
                    </Link>
                </div>
            </div>
            {showErrorMessage && <ErrorDialog setShowErrorMessage={closeErrorDialog} projectName={project.name} errorMessage={errorMessage} />}

        </>
    )

}
