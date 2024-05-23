import React, { useState } from "react";
import { RxWidth } from "react-icons/rx";
import { GiTreeGrowth, GiSandsOfTime } from "react-icons/gi";
import { GoPlus } from "react-icons/go";
import { MdOutlineWbSunny } from "react-icons/md";
import { MdHeight } from "react-icons/md";
import { LiaThermometerHalfSolid } from "react-icons/lia";
import { GiSolidLeaf } from "react-icons/gi";
import { MdOutlineDateRange } from "react-icons/md";
import { CiHeart } from "react-icons/ci";


export default function ProjectCard({ project }) {

    const [accordionOpen, setVisible] = useState(false);
    function toggleAccordion(e){
        setVisible(!accordionOpen);
    }
    let imageUrl;
    if (project.plants.length > 0 && project.plants[0].immagini.length > 0) {
        imageUrl = "url(" + project.plants[0].immagini[0] + ")";
    } else { 
        imageUrl = "url(empty_plant.jpeg" }
    return (
        <>
            <div className="project-card">
                <div className="main">
                    <div style={{ "backgroundImage": imageUrl }} className="image" >
                    </div>
                </div>
                <div className="flex flex-col w-full px-4 gap-2 justify-between  pb-2 rounded-b-lg">
                    <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                        <h2 id={"accordion-flush-heading"}>
                            <button onClick={toggleAccordion} type="button" className="plantName flex items-center justify-between  w-11/12 rtl:text-right text-gray-500 dark:text-gray-400" aria-expanded="true" >
                                <span className="truncate" title={project.name}>{project.name}</span>
                                <svg data-accordion-icon className={accordionOpen?"w-3 h-3 shrink-0" :"w-3 h-3 rotate-180 shrink-0"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                </svg>
                            </button>
                        </h2>
                        <div className={accordionOpen ? "":"hidden"} aria-labelledby={"accordion-flush-heading"}>
                            <div className="py-2 border-b border-gray-200 dark:border-gray-700">
                                <p className="mx-2 text-xs text-left text-gray-500 dark:text-gray-400">{project.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-rowc gap-2 ">
                        <MdOutlineDateRange className="text-lg" />
                        <span className="text-sm">{project.creationDate}</span>
                    </div>
                    <button className="bg-[#E3F5FF] p-2 self-center w-11/12 text-sm rounded-lg hover:bg-[#DEFE9A]">
                        Vai al progetto
                    </button>
                </div>
            </div>
        </>
    )

}
