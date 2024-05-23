import React from "react";
import { Spinner } from 'flowbite-react';
import { Label, TextInput } from "flowbite-react";
import { HiMail } from 'react-icons/hi';
import { Link, Navigate, json } from "react-router-dom";
import Constant from "../utils/constant";
import { Alert, AlertTitle } from "@mui/material";
import { sha256 } from "js-sha256";
import { useState } from "react";
import { API } from "../APIService/API";
import Header from "../pageComponents/header";


export default function Login({user,setUser}) {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [loggedOut, setLoggedOut] = useState(false);
    const [snackBarMessage, setSnackBarMessage] = useState('');


    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const submitCredetials = (e) => {
        // Create an object to represent the form data

        const formData = new URLSearchParams();
        const hashedPassword = sha256(password);

        formData.append("j_username", username);
        formData.append("j_password", hashedPassword);
        if (username !== "" && password !== "") {
            setIsLoading(true);
            setSnackBarMessage('Username o password errati.');

            // Make an HTTP POST request using fetch against j_security_check endpoint
            API.login(formData)
                .then((response) => {
                    if (response.status === 200) {
                        // Authentication was successful
                        const credentials = `${username}:${password}`;
                        const encodedCredentials = btoa(credentials); // Base64 encoding
                        localStorage.setItem(Constant.localStorageUserCredKey, encodedCredentials);
                        localStorage.setItem(Constant.localStorageSessionStartKey, Date.now());
                        getUserInfo(username);
                    } else {
                        handleError();
                    }
                })
                .catch((error) => {
                    handleError();
                });

        }
    }

    const handleError = (e) => {
        setSnackBarMessage('Username o password errati.')
        setIsLoading(false);
        setIsError(true);
        setIsError(setTimeout(() => {
            setSnackBarMessage('Username o password errati.')
        }, 3000)
        )
    }

    const getUserInfo = (username) => {

        API.getUserInfo(username)
            .then((response) => {
                if (response.status === 200) {
                    // Authentication was successful
                    setUser(response.data);
                } else {
                    handleError();
                }
            });
    }


    return (
        <>
        <div className="justify-center  flex h-auto w-full py-16" >
            <div className="flex flex-col gap-y-3 border-solid w-11/12 lg:w-1/3 justify-center items-center py-8 mx-auto my-6 border-2 border-slate-300 rounded-[32px]">
                <Link to="/">
                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="26" cy="26" r="26" fill="#C8F44D" />
                        <path d="M27.7029 40.6503L27.7029 40.6503C26.1869 40.9816 23.7618 41.4771 21.6306 39.956C20.4548 39.1167 18.5351 37.2173 16.6106 35.1399C14.741 33.1216 12.9422 31.0181 11.9469 29.7439C11.5105 28.8933 11.0122 27.6164 11.0002 26.3345C10.9885 25.0854 11.4287 23.814 12.9976 22.8347L28.9245 13.1244C30.2065 12.3716 31.7802 11.8445 33.1663 12.0417C34.4392 12.2229 35.7705 13.0452 36.6232 15.5086C37.6491 18.4723 38.651 21.5308 39.4349 24.193C40.2254 26.8779 40.7733 29.0915 40.9212 30.3984C40.9245 30.4273 40.9291 30.4561 40.9349 30.4847C41.2488 32.0326 40.4335 34.1763 37.9345 35.5662C36.5409 36.3413 34.3538 37.5383 32.3083 38.5859C31.2849 39.1101 30.3055 39.5925 29.4828 39.9647C28.6321 40.3497 28.03 40.5788 27.7242 40.6456L27.7029 40.6503Z" stroke="black" strokeWidth="2" strokeLinejoin="round" />
                    </svg>
                </Link>
                <div className="flex flex-col gap-y-6 w-4/5 justify-center items-stretch items-center ">

                    <div className="flex flex-col">
                        <span className="font-medium text-3xl text-wrap">Accedi al tuo account</span>
                        <span className="font-light text-l text-balance">Utilizza le credenziali inserite in fase di registrazione per accedere al tuo account</span>
                    </div>
                    <form className="space-y-4 flex flex-col" type='submit' onSubmit={e => e.preventDefault()}>
                        <div className=" flex flex-col justify-items-start">
                            <div className="mb-2 block self-start">
                                <Label htmlFor="email4" value="Email" />
                            </div>
                            <TextInput
                                id="email4"
                                type="email"
                                placeholder="name@example.com"
                                required
                                value={username} onChange={handleUsernameChange}

                            />
                        </div>
                        <div className="flex flex-col justify-items-start">
                            <div className="mb-2 block self-start">
                                <Label htmlFor="password" value="Password" />
                            </div>
                            <TextInput
                                id="password"
                                type="password"


                                required
                                value={password} onChange={handlePasswordChange}

                            />
                        </div>

                        <div className="mt-2 py-4">
                            <button
                                id="loginButton"
                                className="grid grid-cols-3 w-full rounded-[32px] justify-center rounded-md bg-[#CBFF5C] px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm hover:bg-green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={submitCredetials}
                            >
                                <div></div>
                                <span >Accedi</span>
                                {isLoading && <div className='spinner'></div>}

                            </button>
                        </div>
                    </form>
                    <div className="font-light text-l text-balance">
                        Non hai ancora un account?
                        <br></br>
                        <Link to="/register" className="font-medium underline text-green-700">Registati adesso</Link>
                    </div>
                </div>
                <div className="w-4/5 text-left">
                    {user && <Navigate to="/explore-plants" replace={true} />}

                    {isError &&
                        <Alert severity="error">
                            <AlertTitle>Errore</AlertTitle>
                            Username o password errati. Non ricordi la password? Clicca qui
                        </Alert>}
                </div>
            </div>
        </div>
        </>
    )
}