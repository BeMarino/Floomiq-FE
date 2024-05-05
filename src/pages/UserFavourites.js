import React, { useState, useRef } from 'react';
import { RiBook3Fill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { BsBagHeart } from "react-icons/bs";
import { IoLibraryOutline } from "react-icons/io5";
import { PiIdentificationCard } from "react-icons/pi";
import { GrArticle } from "react-icons/gr";
import { Link, useLocation } from 'react-router-dom';
import ProductCard from '../pageComponents/explorePlantsComponent/ProductCard';
import FavouriteCard from '../pageComponents/explorePlantsComponent/FavouriteCard';



export default function UserFavourites() {
    let pdfRef = null;
    pdfRef = useRef();

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

    return (<div className="exploreContainer w-11/12">
        <div className="column mt-6 gap-5">
            <div className='row'>
                <div className='w-full flex flex-row justify-between px-8'>
                    <div className='flex flex-row w-[28%] justify-between ml-[2%]'>
                        <div className='flex flex-col '>
                            <div class=" place-self-center	relative w-16 h-16 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                <svg class="absolute w-18 h-18 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                            </div>
                            <div className='py-2 font-normal place-self-center	text-base'>User name</div>
                        </div>
                        <div className='flex flex-col  self-end'>
                            <div className='py-2 font-normal place-self-center	text-2xl font-light	'>I miei preferiti</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='p-4 flex flex-col w-[18%] rounded-lg bg-[#F3F3F3] h-[73vh] gap-8'>
                    <div className='flex flex-col gap-2'>
                        <div className='text-left text-stone-400 text-sm'>Dashboard</div>
                        <Link to="/my-favourites" className='flex flex-row text-lg gap-2 rounded-full py-2 px-4 hover:bg-gray-400'   style={path==="/my-favourites" ?{"background-color":  "#DEFE9A"}:{"background-color":  ""}}>
                            <BsBagHeart />
                            <div className='text-left text-sm 0'>
                                Preferiti
                            </div>
                        </Link>
                        <Link to="/my-projects" className='flex flex-row text-lg gap-2 rounded-full py-2 px-4 hover:bg-gray-400' hover={path!=="/my-projects" && "bg-gray-400"} style={path==="/my-projects" ?{"background-color":  "#DEFE9A"}:{"background-color":  ""}}>
                            <IoLibraryOutline />
                            <div className='text-left  text-sm'>Progetti</div>
                        </Link>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='text-left text-stone-400 text-sm'>Pages</div>
                        <Link className='flex flex-row text-lg gap-2 rounded-full  py-2 px-4 hover:bg-gray-400'>
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
                <div className='resultsProject gap-4'>
                    {productList.map((_, index) => (
                        <FavouriteCard  key={index} product={productList[index]}/>
                    ))}
                </div>
            </div>
        </div>
    </div>)
};
