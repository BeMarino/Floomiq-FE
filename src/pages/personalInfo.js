import React, { useState, useRef } from 'react';
import { RiBook3Fill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { BsBagHeart } from "react-icons/bs";
import { IoLibraryOutline } from "react-icons/io5";
import { PiIdentificationCard } from "react-icons/pi";
import { GrArticle } from "react-icons/gr";
import ProjectCard from '../pageComponents/explorePlantsComponent/projectCard';
import { Link, useLocation } from 'react-router-dom';

export default function PersonalInfo() {

    const user = localStorage.getItem("userJSON")
    console.log(user)
    const location = useLocation();
    const path = location.pathname;



    return (
        <>
            <div className="exploreContainer w-11/12">
                <div className="column gap-5 mt-6">
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
                                    <div className='py-2 font-normal place-self-center	text-2xl font-light	'>I miei progetti</div>
                                </div>
                            </div>
                            <button type="button" class="px-2.5 py-2.5 gap-2 text-normal self-end font-medium text-grey-700 flex flex-row items-center bg-grey-700 border-slate-500 border-2 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center">
                                <AiOutlinePlus />
                                Nuovo progetto
                                <RiBook3Fill />
                            </button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='p-4 flex flex-col w-[18%] rounded-lg bg-[#F3F3F3] h-[73vh] gap-8'>
                            <div className='flex flex-col gap-2'>
                                <div className='text-left text-stone-400 text-sm'>Dashboard</div>
                                <Link to="/my-favourites" className='flex flex-row text-lg gap-2 rounded-full py-2 px-4 hover:bg-gray-400' style={path === "/my-favourites" ? { "background-color": "#DEFE9A" } : { "background-color": "" }}>
                                    <BsBagHeart />
                                    <div className='text-left text-sm 0'>
                                        Preferiti
                                    </div>
                                </Link>
                                <Link to="/my-projects" className='flex flex-row text-lg gap-2 rounded-full py-2 px-4 hover:bg-gray-400' hover={path !== "/my-projects" && "bg-gray-400"} style={path === "/my-projects" ? { "background-color": "#DEFE9A" } : { "background-color": "" }}>
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
                        <div className='resultsProject gap-4'>

                        </div>
                    </div>
                </div>
            </div>

            <section class="w-full overflow-hidden dark:bg-gray-900">
                <div class="flex flex-col">
                    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjb3ZlcnxlbnwwfDB8fHwxNzEwNzQxNzY0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="User Cover"
                        class="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem]" />

                    <div class="sm:w-[80%] xs:w-[90%] mx-auto flex">
                        <img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxwZW9wbGV8ZW58MHwwfHx8MTcxMTExMTM4N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="User Profile"
                            class="rounded-md lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]" />

                        <h1
                            class="w-full text-left my-4 sm:mx-4 xs:pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif">
                            Samuel Abera</h1>

                    </div>

                    <div
                        class="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
                        <p class="w-fit text-gray-700 dark:text-gray-400 text-md">Lorem, ipsum dolor sit amet
                            consectetur adipisicing elit. Quisquam debitis labore consectetur voluptatibus mollitia dolorem
                            veniam omnis ut quibusdam minima sapiente repellendus asperiores explicabo, eligendi odit, dolore
                            similique fugiat dolor, doloremque eveniet. Odit, consequatur. Ratione voluptate exercitationem hic
                            eligendi vitae animi nam in, est earum culpa illum aliquam.</p>


                        <div class="w-full my-auto py-6 flex flex-col justify-center gap-2">
                            <div class="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                                <div class="w-full">
                                    <dl class="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                                        <div class="flex flex-col pb-3">
                                            <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Nome</dt>
                                            <dd class="text-lg font-semibold">{user.name}</dd>
                                        </div>
                                        <div class="flex flex-col py-3">
                                            <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Cognome</dt>
                                            <dd class="text-lg font-semibold">{user.surname}</dd>
                                        </div>
                                        <div class="flex flex-col py-3">
                                            <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Data di nascita</dt>
                                            <dd class="text-lg font-semibold"></dd>
                                        </div>
                                        <div class="flex flex-col py-3">
                                            <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Genere</dt>
                                            <dd class="text-lg font-semibold">{user.gender}</dd>
                                        </div>
                                    </dl>
                                </div>
                                <div class="w-full">
                                    <dl class="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">

                                        <div class="flex flex-col pt-3">
                                            <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Numero di telefono</dt>
                                            <dd class="text-lg font-semibold">{user.phone}</dd>
                                        </div>
                                        <div class="flex flex-col pt-3">
                                            <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email</dt>
                                            <dd class="text-lg font-semibold">{user.username}</dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section></>)
}  