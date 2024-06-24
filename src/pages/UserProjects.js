import React, { useState, useRef, useEffect } from 'react';
import { RiBook3Fill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { BsBagHeart } from "react-icons/bs";
import { IoLibraryOutline } from "react-icons/io5";
import { PiIdentificationCard } from "react-icons/pi";
import { GrArticle } from "react-icons/gr";
import ProjectCard from '../pageComponents/explorePlantsComponent/projectCard';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Constant from '../utils/constant';
import { API } from '../APIService/API';
import Spinner from '../pageComponents/spinner';



let pdfRef = null;
export default function UserProjects({user}) {
    const username = user.username;
    pdfRef = useRef();
    const [productList, setProductList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const location = useLocation();
    const path = location.pathname;
    const [sideCartProductList, setSideCartProductList] = useState([]);
    const navigate = useNavigate();
    function addItemToCart(product) {
        setSideCartProductList([...sideCartProductList, product]);
    }

    function removeFromList(product) {
        sideCartProductList.splice(sideCartProductList.indexOf(product), 1);
        setSideCartProductList([...sideCartProductList]);
    }

    useEffect(() => {
        setIsLoading(true)
        API.getUserProjects(username).then((response) => {

          if (response.status === 200) {
            // Authentication was successful
            setProductList(productList.concat(response.data));
          }
        }).catch((err) =>
          console.log("Qualcosa è andato storto")
        );
        setIsLoading(false)
      }, [page])

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
        <div className='flex flex-col w-full mt-16'>
            <div className='flex flex-row w-full justify-between py-2'>
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
            <div className='resultsProject w-full gap-4'>
                {productList.map((_, index) => (
                    <ProjectCard key={index} project={productList[index]} />
                ))}
                {isLoading && <Spinner />}
            </div>
        </div>
    </div>)
};
