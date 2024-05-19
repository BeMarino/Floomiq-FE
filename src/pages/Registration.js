import { Label, Popover, Spinner, TextInput } from "flowbite-react";
import { Component, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { HiMail } from 'react-icons/hi';
import sha256 from 'js-sha256';
import SnackBar from "../snackBar";
import { API } from "../APIService/API";
import RegisteredDialog from "../pageComponents/RegisteredDialog";

export default function Registration() {

    const [nome, setNome] = useState("");
    const [cognome, setCognome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [snackMessage, setSnackMessage] = useState("");
    const [token, setToken] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [req1, setReq1] = useState(false)
    const [req2, setReq2] = useState(false)
    const [req3, setReq3] = useState(false)
    const [req4, setReq4] = useState(false)
    const [showRegisteredDialog, setShowRegisteredDialog] = useState(false)

    const handleNomeChange = (e) => {
        setNome(e.target.value);
    }

    const handleCognomeChange = (e) => {
        setCognome(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
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

        setPassword(e.target.value);

    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleError = (e) => {
        setSnackMessage('Username o password errati.');
        setShowRegisteredDialog(false)
        setIsLoading(false);
        setIsError(true);
        setIsError(setTimeout(() => {
            setSnackMessage('Username o password errati.');
            setIsError(false);
        }, 3000));;
    }

    function showErrorSnackbar(msg) {
        setShowRegisteredDialog(false)
        setSnackMessage(msg);
        setIsError(true);
        setIsError(
            setTimeout(() => {
                setSnackMessage("");
                setIsError(false);
            }, 3000)
        );
        setIsLoading(false)
    }


    const requirementKo = <svg
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
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
    </svg>

    const requirementOk = <svg
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
            strokeWidth="2"
            d="M1 5.917 5.724 10.5 15 1.5"
        />
    </svg>

    // Function to make the POST request with encoded credentials
    const submitCredentials = () => {
        if (password === confirmPassword && req1 && req2 && req3 && req4) {
            setIsLoading(true);

            // Encode credentials
            const hashedPassword = sha256(password);
            // Data to send in the request
            const data = {
                username: email,
                password: hashedPassword,
                name: nome,
                surname: cognome
            };
            API.register(data)
                .then((response) => {
                    if (response.status === 200) {
                        // Authentication was successful
                        setShowRegisteredDialog(true);
                        setIsLoading(false);
                    } else {
                        setIsLoading(false);
                        handleError();
                    }
                })
                .catch((error) => {
                    setIsLoading(false);
                    handleError();
                });
            // Make the request

        } else {
            if (password !== confirmPassword) showErrorSnackbar("Le password non coincidono")
            else showErrorSnackbar("La password non rispetta i requisiti di sicurezza")
            setIsLoading(false)
        }
    }

    return (
        <div className="justify-center flex h-auto w-full py-16 px-2 md:px-0">
            <div className="flex flex-col gap-y-3 border-solid w-full md:w-2/3  h-full justify-center items-center py-8 px-8 mx-auto my-6 border-2 border-slate-300 rounded-[32px]">
                <Link to="/">
                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="26" cy="26" r="26" fill="#C8F44D" />
                        <path d="M27.7029 40.6503L27.7029 40.6503C26.1869 40.9816 23.7618 41.4771 21.6306 39.956C20.4548 39.1167 18.5351 37.2173 16.6106 35.1399C14.741 33.1216 12.9422 31.0181 11.9469 29.7439C11.5105 28.8933 11.0122 27.6164 11.0002 26.3345C10.9885 25.0854 11.4287 23.814 12.9976 22.8347L28.9245 13.1244C30.2065 12.3716 31.7802 11.8445 33.1663 12.0417C34.4392 12.2229 35.7705 13.0452 36.6232 15.5086C37.6491 18.4723 38.651 21.5308 39.4349 24.193C40.2254 26.8779 40.7733 29.0915 40.9212 30.3984C40.9245 30.4273 40.9291 30.4561 40.9349 30.4847C41.2488 32.0326 40.4335 34.1763 37.9345 35.5662C36.5409 36.3413 34.3538 37.5383 32.3083 38.5859C31.2849 39.1101 30.3055 39.5925 29.4828 39.9647C28.6321 40.3497 28.03 40.5788 27.7242 40.6456L27.7029 40.6503Z" stroke="black" strokeWidth="2" strokeLinejoin="round" />
                    </svg>
                </Link>

                <div className="flex flex-col md:flex-row gap-y-5 w-full h-full justify-between px-[10%] items-center">
                    <div className="flex flex-col">
                        <span className="font-medium text-3xl text-wrap">Benvenuto!</span>
                        <span className="font-light text-l text-balance">Inserisci i tuoi dati per registrarti.</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-medium text-xl">Hai già un account?</span>
                        <Link to="/login" className="font-medium underline text-balance text-green-700">Accedi adesso</Link>
                    </div>

                </div>
                <form className="space-y-4 flex flex-col md:flex-row w-full " type='submit' onSubmit={e => e.preventDefault()}>

                    <div className="flex flex-col  gap-y-6 w-full md:w-1/2 justify-center items-stretch">

                        <div className="max-w-md flex flex-col justify-items-start">
                            <div className="mb-2 block self-start">
                                <Label htmlFor="nome" value="Nome" />
                            </div>
                            <TextInput
                                id="nome"
                                type="text"
                                //icon={HiMail}
                                placeholder="Mario"
                                required
                                value={nome} onChange={handleNomeChange}

                            />
                        </div>
                        <div className="max-w-md flex flex-col justify-items-start">
                            <div className="mb-2 block self-start">
                                <Label htmlFor="cognome" value="Cognome" />
                            </div>
                            <TextInput
                                id="cognome"
                                type="text"
                                //icon={HiMail}
                                placeholder="Rossi"
                                required
                                value={cognome} onChange={handleCognomeChange}

                            />
                        </div>
                        <div className="max-w-md flex flex-col justify-items-start">
                            <div className="mb-2 block self-start">
                                <Label htmlFor="email" value="Email" />
                            </div>
                            <TextInput
                                id="email"
                                type="email"
                                icon={HiMail}
                                placeholder="email@example.com"
                                required
                                value={email} onChange={handleEmailChange}

                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-full md:w-1/2 gap-y-6  md:ml-[8%]">

                        <div className="max-w-md flex flex-col justify-items-start z-10">
                            <div className="mb-4 block self-start">
                                <Label htmlFor="password" value="Password" />
                            </div>
                            <Popover
                                trigger="hover"
                                content={
                                    <div className="z-10 p-5">
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
                                <TextInput id="password1" className="py-0 mt-[-5%]" type="password" required value={password} onChange={handlePasswordChange} />
                            </Popover>
                        </div>
                        <div className="max-w-md flex flex-col justify-items-start z-0">
                            <div className="mb-2 block self-start">
                                <Label htmlFor="confirmPassword" value="Conferma password" />
                            </div>
                            <TextInput
                                id="confirmPassword"
                                type="password"
                                //icon={HiMail}
                                placeholder=""
                                required
                                value={confirmPassword} onChange={handleConfirmPasswordChange}

                            />
                        </div>

                        <div className="mt-2 py-4 ">
                            <button
                                className="flex w-full max-w-md rounded-[32px] justify-center rounded-md bg-[#CBFF5C] px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={submitCredentials}
                            >
                                Registrati
                                {isLoading && <div className='spinner'></div>}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {showRegisteredDialog && <RegisteredDialog/> }
            {isError && <SnackBar type={"error"} message={snackMessage} />}

        </div>
    )
}