import React, { useState, useRef } from 'react';
import { RiBook3Fill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { BsBagHeart } from "react-icons/bs";
import { IoLibraryOutline } from "react-icons/io5";
import { PiIdentificationCard } from "react-icons/pi";
import { GrArticle } from "react-icons/gr";
import ProjectCard from '../pageComponents/explorePlantsComponent/projectCard';
import { Link, Navigate, useLocation } from 'react-router-dom';
import Constant from '../utils/constant';



let pdfRef = null;
export default function UserProjects() {
    pdfRef = useRef();
    const user = JSON.parse(localStorage.getItem(Constant.localStorageUserKey))
    const productList = [{
        name: 'Abelia Edward Goucher',
        image: 'Abelia_Edward_Goucher.jpeg',
        height: "2m",
        durability: "Eternal"
    },
    {
        name: 'Abelia Edward Goucher',
        image: 'Abelia_Edward_Goucher.jpeg',
        height: "2m",
        durability: "Eternal"
    },
    {
        name: 'Abelia Edward Goucher',
        image: 'Abelia_Edward_Goucher.jpeg',
        height: "2m",
        durability: "Eternal"
    },
    {
        name: 'Abelia Edward Goucher',
        image: 'Abelia_Edward_Goucher.jpeg',
        height: "2m",
        durability: "Eternal"
    },
    {
        name: 'Abelia Edward Goucher',
        image: 'Abelia_Edward_Goucher.jpeg',
        height: "2m",
        durability: "Eternal"
    }, {
        name: 'Abelia Edward Goucher',
        image: 'Abelia_Edward_Goucher.jpeg',
        height: "2m",
        durability: "Eternal"
    }, {
        name: 'Abelia Edward Goucher',
        image: 'Abelia_Edward_Goucher.jpeg',
        height: "2m",
        durability: "Eternal"
    }, {
        name: 'Abelia Edward Goucher',
        image: 'Abelia_Edward_Goucher.jpeg',
        height: "2m",
        durability: "Eternal"
    }, {
        name: 'Abelia Edward Goucher',
        image: 'Abelia_Edward_Goucher.jpeg',
        height: "2m",
        durability: "Eternal"
    }, {
        name: 'Abelia Edward Goucher',
        image: 'Abelia_Edward_Goucher.jpeg',
        height: "2m",
        durability: "Eternal"
    }, {
        name: 'Abelia Edward Goucher',
        image: 'Abelia_Edward_Goucher.jpeg',
        height: "2m",
        durability: "Eternal"
    }, {
        name: 'Abelia Edward Goucher',
        image: 'Abelia_Edward_Goucher.jpeg',
        height: "2m",
        durability: "Eternal"
    }, {
        name: 'Abelia Edward Goucher',
        image: 'Abelia_Edward_Goucher.jpeg',
        height: "2m",
        durability: "Eternal"
    }, {
        name: 'Abelia Edward Goucher',
        image: 'Abelia_Edward_Goucher.jpeg',
        height: "2m",
        durability: "Eternal"
    }, {
        name: 'Abelia Edward Goucher',
        image: 'Abelia_Edward_Goucher.jpeg',
        height: "2m",
        durability: "Eternal"
    }, {
        name: 'Abelia Edward Goucher',
        image: 'Abelia_Edward_Goucher.jpeg',
        height: "2m",
        durability: "Eternal"
    }, {
        name: 'Abelia Edward Goucher',
        image: 'Abelia_Edward_Goucher.jpeg',
        height: "2m",
        durability: "Eternal"
    }, {
        name: 'Abelia Edward Goucher',
        image: 'Abelia_Edward_Goucher.jpeg',
        height: "2m",
        durability: "Eternal"
    }]

    const location = useLocation();
    const path = location.pathname;
    const [sideCartProductList, setSideCartProductList] = useState([]);

    function addItemToCart(product) {
        setSideCartProductList([...sideCartProductList, product]);
    }

    function removeFromList(product) {
        sideCartProductList.splice(sideCartProductList.indexOf(product), 1);
        setSideCartProductList([...sideCartProductList]);
    }

    return (<div className="exploreContainer w-11/12 flex flex-row mt-24">
        <div className="flex flex-col w-1/5 px-8 gap-5">
            <div className=" place-self-center 	relative w-16 h-16 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg className="absolute w-18 h-18 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            </div>
            <div className='font-bold place-self-center text-lg'>{user.name} {user.surname}</div>
            <div className='p-4 flex flex-col  rounded-lg bg-[#d2d1d1] h-[73vh] gap-8'>
                <div className='flex flex-col gap-2'>
                    <div className='text-left text-stone-400 text-sm'>Dashboard</div>
                    <Link to="/my-favourites" className='flex flex-row text-lg gap-2 rounded-full py-2 px-4 hover:bg-gray-400' style={path === "/my-favourites" ? { "backgroundColor": "#DEFE9A" } : { "backgroundColor": "" }}>
                        <BsBagHeart />
                        <div className='text-left text-sm 0'>
                            Preferiti
                        </div>
                    </Link>
                    <Link to="/my-projects" className='flex flex-row text-lg gap-2 rounded-full py-2 px-4 hover:bg-gray-400' hover={path !== "/my-projects" && "bg-gray-400"} style={path === "/my-projects" ? { "backgroundColor": "#DEFE9A" } : { "backgroundColor": "" }}>
                        <IoLibraryOutline />
                        <div className='text-left  text-sm'>Progetti</div>
                    </Link>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='text-left text-stone-400 text-sm'>Pages</div>
                    <Link to="/personal-info" className='flex flex-row text-lg gap-2 rounded-full  py-2 px-4 hover:bg-gray-400'>
                        <PiIdentificationCard />
                        <div className='text-left text-sm'>
                            Account
                        </div>
                    </Link>
                    <Link className='flex flex-row text-lg gap-2 rounded-full py-2 px-4 hover:bg-gray-400'>
                        <GrArticle />
                        <div className='text-left  text-sm'>Blog</div>
                    </Link>
                </div>
            </div>
        </div>
        <div className='flex flex-col w-4/5 mt-16'>
            <div className='flex flex-row w-ful justify-between py-2'>
                <div className='flex flex-col'>
                    <div className='place-self-center	text-2xl font-light	'>I miei progetti</div>
                </div>
                <Link to="/explore-plants" className="px-2.5 py-2.5 flex gap-2 mr-24 text-normal font-medium text-grey-700 items-center bg-grey-700 border-slate-500 border-2 hover:bg-gray-300 focus:ring-4
                 focus:outline-none focus:ring-blue-300 rounded-lg text-center">
                    <AiOutlinePlus />
                    Nuovo progetto
                    <RiBook3Fill />
                </Link>
            </div>
            <div className='resultsProject gap-4'>
                {productList.map((_, index) => (
                    <ProjectCard key={index} project={productList[index]} />
                ))}
            </div>
        </div>
    </div>)
};
