import React, { useState, useRef, useEffect } from 'react';
import { BiSolidSave } from "react-icons/bi";
import { AiOutlineUserDelete } from "react-icons/ai";
import { BsBagHeart } from "react-icons/bs";
import { IoLibraryOutline } from "react-icons/io5";
import { PiIdentificationCard } from "react-icons/pi";
import { GrArticle } from "react-icons/gr";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Constant from '../utils/constant';
import { API } from '../APIService/API';
import { redirect } from "react-router-dom";
import { Popover, TextInput } from 'flowbite-react';


export default function PersonalInfo() {

    const user = JSON.parse(localStorage.getItem(Constant.localStorageUserKey))
    const [redirect, setRedirect] = useState(false);


    let [userName, setUserName] = useState(user.name);
    let [lastName, setLastName] = useState(user.surname);
    let [userEmail, setUserEmail] = useState(user.username);
    let [userPhone, setUserPhone] = useState(user.phone);
    const [loggedOut, setLoggedOut] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [req1, setReq1] = useState(false);
    const [req2, setReq2] = useState(false);
    const [req3, setReq3] = useState(false);
    const [req4, setReq4] = useState(false);
    const [snackMessage, setSnackMessage] = useState("");
    let [pass, setPass] = useState(user.pass);
    let [pass2, setPass2] = useState(user.pass);
    const location = useLocation();
    const path = location.pathname;
    let [changes, setChanges] = useState(false)
    const [uiState, setUiState] = useState({
        email: "",
        password: "",
        snackMessage: "",
        token: ""
    })

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
        console.log(e.target.value)
        if (e.target.value.length >= 8) {
            setReq1(true);
        } else {
            setReq1(false);
        }

        if (/[a-z]/.test(e.target.value) && /[A-Z]/.test(e.target.value)) {
            setReq2(true);
        } else {
            setReq2(false);
        }

        if (/[^\w\s]/.test(e.target.value)) {
            setReq4(true);
        } else {
            setReq4(false);
        }

        if (/[0-9]/.test(e.target.value)) {
            setReq3(true);
        } else {
            setReq3(false);
        }

        pass = setPass(e.target.value);
        setChanges(true);
    };
    const handlePass2Changes = (e) => {
        pass2 = setPass2(e.target.value);
        setChanges(true);
    };

    function showSuccessSnackbar(msg) {
        setSnackMessage(msg);
        setIsSuccess(
            setTimeout(() => {
                setSnackMessage("")
                setIsSuccess(false);
            }, 3000)
        );
    }

    function showErrorSnackbar(msg) {
        setSnackMessage(msg);
        setIsError(
            setTimeout(() => {
                setSnackMessage("");
                setIsError(false);
            }, 3000)
        );
    }

    function handleError(e) {
        setUiState({ ...uiState, snackMessage: 'Username o password errati.' });
        setIsLoading(false);
        setIsError(true);
        setIsError(setTimeout(() => {
            setUiState({ ...uiState, snackMessage: 'Username o password errati.' });
            setIsError(false)
        }, 3000));
    }

    const updateUserInfo = (e) => {
        const body = {
            nome: userName,
            cognome: lastName,
            email: userEmail,
            telefono: userPhone,
            pass: pass
        }
        API.updateUserInfo(body)
            .then((response) => {
                if (response.status === 200) {
                    // Authentication was successful

                } else {
                    handleError();
                }
            })
            .catch((err) =>
                showErrorSnackbar("Qualcosa è andato storto")
            )
            .finally(setIsLoading(false))
    }

    let open = false;
    let requirementKo = <svg
        className="me-2.5 h-3 w-3 text-red-700 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
    </svg>

    let requirementOk = <svg
        className="me-2 h-3.5 w-3.5 text-green-400 dark:text-green-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 16 12"
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke-width="2"
            d="M1 5.917 5.724 10.5 15 1.5"
        />
    </svg>

    return (
        <div className="w-auto flex flex-row mt-24 ">
            <div className="flex flex-col w-1/5 px-8 gap-5 pb-4">
                <div className="place-self-center relative w-16 h-16 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg className="absolute w-18 h-18 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
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
            <div className='flex flex-col w-4/5 flex-wrap mt-24 divide-lime-300 divide-y-2 pr-6 '>
                <div className='flex flex-row  justify-between py-2'>
                    <div className='flex flex-col'>
                        <div className='place-self-center text-2xl font-light'>Informazioni personali</div>
                    </div>
                    {changes && <div className='flex flex-col'>
                        <button
                            className="mt-4 w-full gap-2 flex-row bg-green-500 border-2 border-green-800 text-gray-900 text-sm rounded-lg hover:bg-green-300 block p-2.5"
                            onClick={updateUserInfo}
                        ><BiSolidSave className='size-5' /> Salva modifiche</button>
                    </div>}
                </div>
                <div>
                    <div className='flex flex-row gap-32 pt-2 items-stretch'>
                        <div className='flex flex-col w-full'>
                            <label
                                className="flex flex-start text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Nome
                            </label>
                            <input
                                type="text"
                                id="nome"
                                required
                                className="w-full mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-300 focus:border-green-300 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={userName}
                                onChange={handleNameChanges}
                            />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label
                                className="flex flex-start text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Cognome
                            </label>
                            <input
                                type="text"
                                id="cognome"
                                required
                                className="w-full mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-300 focus:border-green-300 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={user.surname}
                                onChange={handleLastNameChanges}

                            />
                        </div>
                    </div>
                    <div className='flex flex-row gap-32 pt-2'>
                        <div className='flex flex-col  w-full'>
                            <label
                                className="flex flex-start text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Telefono
                            </label>
                            <input
                                type="text"
                                id="telefono"
                                required
                                className="w-full mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-300 focus:border-green-300 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={user.name}
                                onChange={handlePhoneChanges}

                            />
                        </div>
                        <div className='flex flex-col  w-full'>
                            <label
                                className="flex flex-start text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Membro Floomiq dal
                            </label>
                            <input
                                type="text"
                                id="floomiqBy"
                                required
                                className="w-full mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-300 focus:border-green-300 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={user.name}
                                readOnly
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
                        <div className='flex flex-col  w-full'>
                            <label
                                className="flex flex-start text-sm font-medium text-gray-900 dark:text-white"
                            >
                                E-mail
                            </label>
                            <input
                                type="text"
                                id="email"
                                required
                                className="w-full mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-300 focus:border-green-300 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={user.username}
                                onChange={handleMailChanges}

                            />
                        </div>
                        <div className='flex flex-col  w-full'>
                            <label
                                className="flex flex-start text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Password
                            </label>

                            <Popover
                                trigger="hover"
                                content={
                                    <div className="space-y-2 p-3 z-10">
                                        <h3 className="font-semibold text-gray-900 dark:text-white">Sicurezza password</h3>
                                        <div className="grid grid-cols-4 gap-2">
                                            <div className={req1 ? "h-1 bg-green-400" : "h-1 bg-gray-200 "}></div>
                                            <div className={req2 ? "h-1 bg-green-400" : "h-1 bg-gray-200 "}></div>
                                            <div className={req3 ? "h-1 bg-green-400" : "h-1 bg-gray-200 "}></div>
                                            <div className={req4 ? "h-1 bg-green-400" : "h-1 bg-gray-200 "}></div>
                                        </div>
                                        <ul>
                                            <li className="mb-1 flex items-center">
                                                {req1 ? requirementOk : requirementKo}
                                                Almeno 8 caratteri
                                            </li>
                                            <li className="mb-1 flex items-center">
                                                {req2 ? requirementOk : requirementKo}
                                                Lettere minuscole e maiuscole
                                            </li>
                                            <li className="mb-1 flex items-center">
                                                {req3 ? requirementOk : requirementKo}
                                                Un numero
                                            </li>
                                            <li className="mb-1 flex items-center">
                                                {req4 ? requirementOk : requirementKo}
                                                Un carattere speciale
                                            </li>
                                        </ul>
                                    </div>
                                }
                            >
                                <TextInput id="pass1"
                                placeholder={pass}
                                defaultValue={pass}
                                    type="password" required value={pass} onChange={handlePassChanges} />

                            </Popover>

                        </div>

                    </div>
                    <div className='flex flex-row gap-32'>
                        <div className='flex flex-col  w-full'>
                            <label
                                className="flex flex-start text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Conferma Password
                            </label>
                            <input
                                type="password"
                                id="pass2"
                                required
                                className="w-full mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-300 focus:border-green-300 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={handlePass2Changes}
                            />
                        </div>
                        <div className='flex flex-col w-full'>
                            <button
                                className="mt-4 gap-2 flex flex-row bg-red-500 border-2 border-red-800 text-gray-900 text-sm rounded-lg hover:bg-red-300 p-2.5"
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