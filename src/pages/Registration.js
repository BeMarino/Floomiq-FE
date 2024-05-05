import { Label, Popover, Spinner, TextInput } from "flowbite-react";
import { Component } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { HiMail } from 'react-icons/hi';
import sha256 from 'js-sha256';
import Constant from "../utils/constant";

export default class Registration extends Component {

    constructor() {
        super();
        this.state = {
            nome: "",
            cognome: "",
            email: "",
            password: "",
            confirmPassword: "",
            snackMessage: "",
            token: "",
        };
        this.isError = false;
        this.isLoading = false;
        this.handleNomeChange = this.handleNomeChange.bind(this);
        this.handleCognomeChange = this.handleCognomeChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        this.handleError = this.handleError.bind(this);
        this.submitCredentials = this.submitCredentials.bind(this);
        this.user = null;
        this.loggedOut = null;
        this.req1 = false;
        this.req2 = false;
        this.req3 = false;
    }

    handleNomeChange(e) {
        this.setState({ nome: e.target.value });
    }

    handleCognomeChange(e) {
        this.setState({ cognome: e.target.value });
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    handlePasswordChange(e) {
        if (e.target.value.length >= 8) {
            this.req1 = true;
        } else {
            this.req1 = false;
        }

        if (/[a-z]/.test(e.target.value) && /[A-Z]/.test(e.target.value)) {
            this.req2 = true;
        } else {
            this.req2 = false;
        }

        if (/[^\w\s]/.test(e.target.value)) {
            this.req4 = true;
        } else {
            this.req4 = false;
        }

        if (/[0-9]/.test(e.target.value)) {
            this.req3 = true;
        } else {
            this.req3 = false;
        }

        this.setState({ password: e.target.value });

    }

    handleConfirmPasswordChange(e) {
        this.setState({ confirmPassword: e.target.value });
    }

    handleError(e) {
        this.setState({ snackMessage: 'Username o password errati.' });
        this.isLoading = false;
        this.isError = true;
        this.isError = setTimeout(() => {
            this.setState({ snackMessage: 'Username o password errati.' });
            this.isError = false;
        }, 3000);;
    }

    logout = () => {
        // delete the credential cookie, essentially killing the session
        const removeCookie = `quarkus-credential=; Max-Age=0;path=/`;
        localStorage.removeItem("user");
        localStorage.removeItem("userCred");
        localStorage.removeItem("timestamp");
        document.cookie = removeCookie;
        this.loggedOut = true;
        this.setState({ snackMessage: 'Username o password errati.' });
        // perform post-logout actions here, such as redirecting back to your login page
    };
    open = false;
    requirementKo = <svg
        className="me-2.5 h-3 w-3 text-red-700 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
    >
        <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
    </svg>

    requirementOk = <svg
        className="me-2 h-3.5 w-3.5 text-green-400 dark:text-green-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 16 12"
    >
        <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5.917 5.724 10.5 15 1.5"
        />
    </svg>
    // Function to encode credentials to base64
    encodeCredentials(username, password) {
        const credentials = `${username}:${password}`;
        const encodedCredentials = btoa(credentials);
        return encodedCredentials;
    }

    // Function to make the POST request with encoded credentials
    async submitCredentials() {
        console.log(this.state)
        if (this.state.password === this.state.confirmPassword && this.req1 && this.req2 && this.req3 && this.req4) {
            // Encode credentials
            const hashedPassword = sha256(this.state.password);
            // Data to send in the request
            const data = {
                username: this.state.email,
                password: hashedPassword,
                nome: this.state.nome,
                cognome: this.state.cognome
            };

            // Make the request
            try {
                const response = await fetch(Constant.apiEndpoint + "user/register", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if (response.ok) {
                    const responseData = await response.json();
                    this.redirect = true;
                } else {
                    console.error('Failed to submit credentials:', response.statusText);
                }
            } catch (error) {
                console.error('Error:', error.message);
            }
        }
    }


    render() {
        return (
            <div className="justify-center flex h-auto w-full py-16">
                <div className="flex flex-col gap-y-3 border-solid w-2/3 h-full justify-center items-center py-8 px-8 mx-auto my-6 border-2 border-slate-300 rounded-[32px]">
                    <Link to="/">
                        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="26" cy="26" r="26" fill="#C8F44D" />
                            <path d="M27.7029 40.6503L27.7029 40.6503C26.1869 40.9816 23.7618 41.4771 21.6306 39.956C20.4548 39.1167 18.5351 37.2173 16.6106 35.1399C14.741 33.1216 12.9422 31.0181 11.9469 29.7439C11.5105 28.8933 11.0122 27.6164 11.0002 26.3345C10.9885 25.0854 11.4287 23.814 12.9976 22.8347L28.9245 13.1244C30.2065 12.3716 31.7802 11.8445 33.1663 12.0417C34.4392 12.2229 35.7705 13.0452 36.6232 15.5086C37.6491 18.4723 38.651 21.5308 39.4349 24.193C40.2254 26.8779 40.7733 29.0915 40.9212 30.3984C40.9245 30.4273 40.9291 30.4561 40.9349 30.4847C41.2488 32.0326 40.4335 34.1763 37.9345 35.5662C36.5409 36.3413 34.3538 37.5383 32.3083 38.5859C31.2849 39.1101 30.3055 39.5925 29.4828 39.9647C28.6321 40.3497 28.03 40.5788 27.7242 40.6456L27.7029 40.6503Z" stroke="black" stroke-width="2" stroke-linejoin="round" />
                        </svg>
                    </Link>

                    <div className="flex flex-row w-full h-full justify-center items-center">
                        <form className="space-y-4 flex flex-row w-full " type='submit' onSubmit={e => e.preventDefault()}>

                            <div className="flex flex-col  gap-y-6 w-1/2 justify-center items-stretch items-center ">
                                <div className="flex flex-col">
                                    <span className="font-medium text-3xl text-wrap">Benvenuto!</span>
                                    <span className="font-light text-l text-balance">Inserisci i tuoi dati per registrarti.</span>
                                </div>
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
                                        value={this.state.nome} onChange={this.handleNomeChange}

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
                                        value={this.state.cognome} onChange={this.handleCognomeChange}

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
                                        value={this.state.email} onChange={this.handleEmailChange}

                                    />
                                </div>
                            </div>
                            <div className="flex flex-col  gap-y-6 w-1/2    ml-[8%]">
                                <div className="flex flex-col">
                                    <span className="font-medium text-xl">Hai già un account</span>
                                    <Link to="/login" className="font-medium underline text-green-700">Accedi adesso</Link>
                                </div>
                                <div className="max-w-md flex flex-col justify-items-start z-50">
                                    <div className="mb-2 block self-start">
                                        <Label htmlFor="password" value="Password" />
                                    </div>
                                    <Popover
                                        trigger="hover"
                                        content={
                                            <div className="space-y-2 p-3 z-10">
                                                <h3 className="font-semibold text-gray-900 dark:text-white">Sicurezza password</h3>
                                                <div className="grid grid-cols-4 gap-2">
                                                    <div className={this.req1 ? "h-1 bg-green-400" : "h-1 bg-gray-200 "}></div>
                                                    <div className={this.req2 ? "h-1 bg-green-400" : "h-1 bg-gray-200 "}></div>
                                                    <div className={this.req3 ? "h-1 bg-green-400" : "h-1 bg-gray-200 "}></div>
                                                    <div className={this.req4 ? "h-1 bg-green-400" : "h-1 bg-gray-200 "}></div>
                                                </div>
                                                <ul>
                                                    <li className="mb-1 flex items-center">
                                                        {this.req1 ? this.requirementOk : this.requirementKo}
                                                        Almeno 8 caratteri
                                                    </li>
                                                    <li className="mb-1 flex items-center">
                                                        {this.req2 ? this.requirementOk : this.requirementKo}
                                                        Lettere minuscole e maiuscole
                                                    </li>
                                                    <li className="mb-1 flex items-center">
                                                        {this.req3 ? this.requirementOk : this.requirementKo}
                                                        Un numero
                                                    </li>
                                                    <li className="mb-1 flex items-center">
                                                        {this.req4 ? this.requirementOk : this.requirementKo}
                                                        Un carattere speciale
                                                    </li>
                                                </ul>
                                            </div>
                                        }
                                    >
                                        <TextInput id="password1" type="password" required value={this.state.password} onChange={this.handlePasswordChange} />
                                    </Popover>
                                    {/* <TextInput
                                        id="password"
                                        type="password"
                                        //icon={HiMail}
                                        placeholder=""
                                        required
                                        value={this.state.password} onChange={this.handlePasswordChange}

                                    /> */}
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
                                        value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange}

                                    />
                                </div>

                                <div className="mt-2 py-4 ">
                                    <button
                                        className="flex w-full max-w-md rounded-[32px] justify-center rounded-md bg-[#CBFF5C] px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        onClick={this.submitCredentials}
                                    >
                                        Registrati
                                    </button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
                    {this.redirect && <Navigate to="/login" replace={true} />}

            </div>

        )
    }

}