import React, { useState, useRef } from 'react';
import { RiBook3Fill } from "react-icons/ri";
import { BiSolidSave } from "react-icons/bi";
import { AiOutlineUserDelete } from "react-icons/ai";
import { BsBagHeart } from "react-icons/bs";
import { IoLibraryOutline } from "react-icons/io5";
import { PiIdentificationCard } from "react-icons/pi";
import { GrArticle } from "react-icons/gr";
import ProjectCard from '../pageComponents/explorePlantsComponent/projectCard';
import { Link, useLocation } from 'react-router-dom';
import Constant from '../utils/constant';

export default function PersonalInfo() {

    const user = JSON.parse(localStorage.getItem(Constant.localStorageUserKey))
    let [userName, setUserName] = useState(user.name);
    let [lastName, setLastName] = useState(user.surname);
    let [userEmail, setUserEmail] = useState(user.username);
    let [userPhone, setUserPhone] = useState(user.phone);
    let [pass, setPass] = useState('');
    let [pass2, setPass2] = useState('');
    const location = useLocation();
    const path = location.pathname;
    let [changes, setChanges] = useState(false)

    const handleNameChanges = (e) => {
        userName = setUserName(e.target.value);
        setChanges(true);
    };

    const handleLastNameChanges = (e) => {
        lastName = setLastName(e.target.value);
        setChanges(true);
    };
    const handleMailChanges = (e) => {
        userEmail = setUserEmail(e.target.value);
        setChanges(true);
    };
    const handlePhoneChanges = (e) => {
        userPhone = setUserPhone(e.target.value);
        setChanges(true);
    };
    const handlePassChanges = (e) => {
        pass = setPass(e.target.value);
        setChanges(true);
    };
    const handlePass2Changes = (e) => {
        pass2 = setPass2(e.target.value);
        setChanges(true);
    };

    const handleChanges = (e) => {
        userName = e.target.value;
        setChanges(true);
    };

    return (<div className="w-11/12 flex flex-row mt-24 gap-32">
        <div className="flex flex-col w-1/5 px-8 gap-5 pb-4">
            <div class=" place-self-center 	relative w-16 h-16 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg class="absolute w-18 h-18 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
            </div>
            <div className='font-bold place-self-center text-lg'>{user.name} {user.surname}</div>
            <div className='p-4 flex flex-col  rounded-lg bg-[#d2d1d1] h-[73vh] gap-8'>
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
                    <Link to="/personal-info" className='flex flex-row text-lg gap-2 rounded-full  py-2 px-4 hover:bg-gray-400' style={path === "/personal-info" ? { "background-color": "#DEFE9A" } : { "background-color": "" }}>
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
        <div className='flex flex-col mt-32 divide-y-2 divide-lime-300'>
            <div>
                <div className='flex flex-row w-full justify-between py-2'>
                    <div className='flex flex-col'>
                        <div className='place-self-center text-2xl font-light'>Informazioni personali</div>
                    </div>
                    {changes && <div className='flex flex-col'>
                        <button
                            className="mt-4 gap-2 flex flex-row bg-green-500 border-2 border-green-800 text-gray-900 text-sm rounded-lg hover:bg-green-300 block p-2.5"
                        ><BiSolidSave className='size-5' /> Salva modifiche</button>
                    </div>}
                </div>
                <div className='flex flex-row gap-32'>
                    <div className='flex flex-col'>
                        <label
                            for="nome"
                            className="flex flex-start text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Nome
                        </label>
                        <input
                            type="text"
                            id="nome"
                            required
                            className="w-96 mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-300 focus:border-green-300 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={userName}
                            onChange={handleNameChanges}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label
                            for="cognome"
                            className="flex flex-start text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Cognome
                        </label>
                        <input
                            type="text"
                            id="cognome"
                            required
                            className="w-96 mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-300 focus:border-green-300 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={user.surname}
                        />
                    </div>
                </div>
                <div className='flex flex-row gap-32'>
                    <div className='flex flex-col'>
                        <label
                            for="telefono"
                            className="flex flex-start text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Telefono
                        </label>
                        <input
                            type="text"
                            id="telefono"
                            required
                            className="w-96 mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-300 focus:border-green-300 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={user.name}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label
                            for="floomiqBy"
                            className="flex flex-start text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Membro Floomiq dal
                        </label>
                        <input
                            type="text"
                            id="floomiqBy"
                            required
                            className="w-96 mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-300 focus:border-green-300 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={user.name}
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className='flex flex-row w-full justify-between py-2 divide-y divide-lime-800'>
                    <div className='flex flex-col'>
                        <div className='place-self-center text-2xl font-light'>Impostazioni account</div>
                    </div>
                </div>
                <div className='flex flex-row gap-32'>
                    <div className='flex flex-col'>
                        <label
                            for="email"
                            className="flex flex-start text-sm font-medium text-gray-900 dark:text-white"
                        >
                            E-mail
                        </label>
                        <input
                            type="text"
                            id="email"
                            required
                            className="w-96 mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-300 focus:border-green-300 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={user.username}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label
                            for="pass1"
                            className="flex flex-start text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="pass1"
                            required
                            className="w-96 mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-300 focus:border-green-300 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={user.name}
                        />
                    </div>

                </div>
                <div className='flex flex-row gap-32'>
                    <div className='flex flex-col'>
                        <label
                            for="pass2"
                            className="flex flex-start text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Conferma Password
                        </label>
                        <input
                            type="password"
                            id="pass2"
                            required
                            className="w-96 mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-300 focus:border-green-300 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={user.name}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <button
                            className="mt-4 gap-2 flex flex-row bg-red-500 border-2 border-red-800 text-gray-900 text-sm rounded-lg hover:bg-red-300 block p-2.5"
                        ><AiOutlineUserDelete className='size-5' /> Elimina Account</button>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex flex-row w-full justify-between py-2'>
                    <div className='flex flex-col'>
                        <div className='place-self-center text-2xl font-light'>Interessi</div>
                    </div>
                </div>
                <div className='flex flex-row gap-16'>
                    <div className='flex flex-col'>
                        <label
                            for="email"
                            className="flex flex-start text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Lista tag
                        </label>
                    </div>
                </div>
            </div>
            {/* <div className='resultsProject gap-4'>
            {productList.map((_, index) => (
                <ProjectCard key={index} project={productList[index]} />
            ))}
        </div> */}
        </div>
    </div>)
}  