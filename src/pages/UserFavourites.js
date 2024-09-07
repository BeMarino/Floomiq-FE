import React, { useState, useRef, useEffect } from 'react';
import { RiBook3Fill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { BsBagHeart } from "react-icons/bs";
import { IoLibraryOutline } from "react-icons/io5";
import { PiIdentificationCard } from "react-icons/pi";
import { GrArticle } from "react-icons/gr";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ProductCard from '../pageComponents/explorePlantsComponent/ProductCard';
import FavouriteCard from '../pageComponents/explorePlantsComponent/FavouriteCard';
import Constant from '../utils/constant';
import { API } from '../APIService/API';
import TabSwitch from '../pageComponents/explorePlantsComponent/tabSwitch';
import ErrorDialog from '../pageComponents/ErrorDialog';



export default function UserFavourites() {
    let pdfRef = null;
    pdfRef = useRef();

    const [productList, setProductList] = useState([])
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        API.userFavourites()
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data)
                    setProductList(response.data);
                }
            })
            .catch((error) => {
            });
    }, [])
    const location = useLocation();
    const path = location.pathname;
    const user = JSON.parse(localStorage.getItem(Constant.localStorageUserKey))
    const navigate = useNavigate();


    function removeFromList(product) {
        productList.splice(productList.indexOf(product), 1);
        setProductList([...productList]);
    }

    const closeErrorDialog = () => {
        setShowErrorMessage(false)
      }

    return (
        <div className="exploreContainer w-full sm:w-11/12 flex flex-row mt-16">
            <div className="flex flex-col w-full mt-16 sm:w-1/5 px-8 sm:gap-5">
            {showErrorMessage && <ErrorDialog setShowErrorMessage={closeErrorDialog} errorMessage={errorMessage} />}

                <div className=" place-self-center 	relative w-16 h-16 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg className="absolute w-18 h-18 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                </div>
                <div className='font-bold place-self-center text-lg'>{user.name} {user.surname}</div>
                <div className='tabSwitch'>
                    <TabSwitch className=" hidden sm:visible"
                        nameLeft={"Progetti"}
                        nameMiddle={"Preferiti"}
                        nameRight={"Account"}
                        onLeftSelected={() => navigate("/my-projects")}
                        onMiddleSelected={() => navigate("/my-favourites")}
                        onRightSelected={() => navigate("/personal-info")}
                        activeTab={1}
                    />
                </div>
                <div className='no-mobile p-4 flex flex-col  rounded-lg bg-[#d2d1d1] h-[73vh] gap-8'>
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
            <div className='flex flex-col w-full sm:mt-16'>
                <div className='no-mobile flex flex-row w-ful mt-8 justify-between py-2'>
                    <div className='flex flex-col'>
                        <div className='place-self-center	text-2xl font-light	'>I miei preferiti</div>
                    </div>
                </div>
                <div className='resultsFavourite gap-x-4'>
                    {productList.map((_, index) => (
                        <FavouriteCard key={index} product={productList[index]} user={user} setShowErrorMessage={setShowErrorMessage} setErrorMessage={setErrorMessage} removeFromList={removeFromList}/>
                    ))}
                </div>
            </div>
        </div>)
};
