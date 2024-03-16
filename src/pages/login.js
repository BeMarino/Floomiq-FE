import React from "react";
import { Spinner } from 'flowbite-react';
import { Label, TextInput, Popover } from "flowbite-react";
import { HiMail } from 'react-icons/hi';
import { Link } from "react-router-dom";

export default class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            snackMessage: "",
            token: ""
        };
        this.isError = false;
        this.isLoading = false;
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleError = this.handleError.bind(this);
        this.user = null;
        this.loggedOut = null;
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
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

    requirementKo = <svg
        className="me-2.5 h-3 w-3 text-gray-300 dark:text-gray-400"
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

    render() {
        return (
            <div className="justify-center  flex h-auto w-full py-16">
                <div className="flex flex-col gap-y-3 border-solid w-1/3 justify-center items-center py-8 mx-auto my-6 border-2 border-slate-300 rounded-[32px]">
                    <Link to="/">
                        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="26" cy="26" r="26" fill="#C8F44D" />
                            <path d="M27.7029 40.6503L27.7029 40.6503C26.1869 40.9816 23.7618 41.4771 21.6306 39.956C20.4548 39.1167 18.5351 37.2173 16.6106 35.1399C14.741 33.1216 12.9422 31.0181 11.9469 29.7439C11.5105 28.8933 11.0122 27.6164 11.0002 26.3345C10.9885 25.0854 11.4287 23.814 12.9976 22.8347L28.9245 13.1244C30.2065 12.3716 31.7802 11.8445 33.1663 12.0417C34.4392 12.2229 35.7705 13.0452 36.6232 15.5086C37.6491 18.4723 38.651 21.5308 39.4349 24.193C40.2254 26.8779 40.7733 29.0915 40.9212 30.3984C40.9245 30.4273 40.9291 30.4561 40.9349 30.4847C41.2488 32.0326 40.4335 34.1763 37.9345 35.5662C36.5409 36.3413 34.3538 37.5383 32.3083 38.5859C31.2849 39.1101 30.3055 39.5925 29.4828 39.9647C28.6321 40.3497 28.03 40.5788 27.7242 40.6456L27.7029 40.6503Z" stroke="black" stroke-width="2" stroke-linejoin="round" />
                        </svg>
                    </Link>
                    <div className="flex flex-col gap-y-6 w-4/5 justify-center items-stretch items-center ">

                        <div className="flex flex-col">
                            <span className="font-medium text-3xl text-wrap">Accedi al tuo account</span>
                            <span className="font-light text-l text-balance">Utilizza le credenziali inserite in fase di registrazione per accedere al tuo account</span>
                        </div>
                        <form className="space-y-8 flex flex-col" type='submit' onSubmit={e => e.preventDefault()}>
                            <div className="max-w-md flex flex-col justify-items-start">
                                <div className="mb-2 block self-start">
                                    <Label htmlFor="email4" value="Email" />
                                </div>
                                <TextInput
                                    id="email4"
                                    type="email"
                                    icon={HiMail}
                                    placeholder="name@flowbite.com"
                                    required
                                    value={this.state.email} onChange={this.handleEmailChange}

                                />
                            </div>
                            <div className="max-w-md flex flex-col justify-items-start">
                                <div className="mb-2 block self-start">
                                    <Label htmlFor="password1" value="Password" />
                                </div>
                                <Popover
                                    trigger="hover"
                                    content={
                                        <div className="space-y-2 p-3">
                                            <h3 className="font-semibold text-gray-900 dark:text-white">Sicurezza password</h3>
                                            <div className="grid grid-cols-3 gap-2">
                                                {/* <div className="h-1 bg-orange-300 dark:bg-orange-400"></div>
                <div className="h-1 bg-orange-300 dark:bg-orange-400"></div> */}
                                                <div className="h-1 bg-gray-200 dark:bg-gray-600"></div>
                                                <div className="h-1 bg-gray-200 dark:bg-gray-600"></div>
                                                <div className="h-1 bg-[#C8F44D] dark:bg-gray-600"></div>
                                            </div>
                                            <ul>
                                                <li className="mb-1 flex items-center">
                                                    {this.requirementKo}
                                                    Almeno 8 caratteri
                                                </li>
                                                <li className="mb-1 flex items-center">
                                                    {this.requirementKo}
                                                    Lettere minuscole e maiuscole
                                                </li>
                                                <li className="mb-1 flex items-center">
                                                    <svg
                                                        className="me-2.5 h-3 w-3 text-gray-300 dark:text-gray-400"
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
                                                    Un carattere speciale
                                                </li>
                                            </ul>
                                        </div>
                                    }
                                >
                                    <TextInput id="password1" type="password" required />
                                </Popover>
                            </div>

                            {/* <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-blue-600 hover:text-orange-500">
                                        Password dimenticata?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={this.state.password} onChange={this.handlePasswordChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div> */}

                            <div className="mt-2 py-4">
                                <button
                                    className="flex w-full rounded-[32px] justify-center rounded-md bg-[#CBFF5C] px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={this.submitCredetials}
                                >
                                    Accedi
                                </button>
                                <div className='spinner'> {this.isLoading && <Spinner color="info" aria-label="Info spinner example" size="xl" />}</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}