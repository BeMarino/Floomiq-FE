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

    let imageUrl = "url(" + project.image + ")";
    return (
        <>
            <div className="project-card">
                <div className="main">
                    <div style={{ "backgroundImage": imageUrl }} className="image" >
                    </div>
                </div>
                <div className="flex flex-col w-full px-4 gap-2 justify-between  pb-2 rounded-b-lg">
                    <span className="font-extrabold	self-start">{project.name}</span>
                    <div className="flex flex-rowc gap-2 ">
                        <MdOutlineDateRange className="text-lg"/>
                        <span className="text-sm">Creato il 01/01/2023</span>
                    </div>
                    <button className="bg-[#E3F5FF] p-2 self-center w-11/12 text-sm rounded-lg hover:bg-[#DEFE9A]">
                        Vai al progetto
                    </button>
                </div>
            </div>
        </>
    )

}
