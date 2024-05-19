import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { API } from "./APIService/API";

export default function VerifyMail() {

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };
    const [verified, setVerified] = useState(false);
    const token = useQuery().get("tk");

    useEffect(() => {
        console.log("token")
        API.verifyMail(token)
            .then((response) => {
                if (response.status === 200) {
                    setVerified(true);
                    console.log("login")
                } 
            })
            .catch((error) => {
            });
    })
    return (
        <>
            {verified ? <div className="flex w-screen h-full self-center items-center z-30 py-16" >
                <div className="flex flex-row divide-x-2 divide-solid divide-emerald-500 py-2 w-1/2 mt-[10%] ml-[25%] border-solid border-2 border-slate-300	bg-white  rounded self-center">
                    <div className="bg-cover bg-no-repeat p-16" >
                        <img src="registration.svg" className="h-[256px] w-[256px]"></img>
                    </div>
                    <div className="flex alert-white">
                        <div className="flex flex-col justify-between p-2">
                            <span className="flex font-medium text-3xl text-wrap">Benvenuto!</span>
                            <span className="flex font-light text-left">Mail verificata con successo.
                                Adesso puoi effettuare il login.
                            </span>
                            <div>

                                <Link to="/login" className="flex text-left font-medium underline text-balance text-green-700">
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> :
                <div className="flex w-screen h-full self-center items-center z-30 py-16" >
                    <div className="flex flex-row divide-x-2 divide-solid divide-emerald-500 py-2 w-1/2 mt-[10%] ml-[25%] border-solid border-2 border-slate-300	bg-white  rounded self-center">
                        <div className="bg-cover bg-no-repeat p-16" >
                            <img src="registration.svg" className="h-[256px] w-[256px]"></img>
                        </div>
                        <div className="flex alert-white">
                            <div className="flex flex-col justify-between p-2">
                                <span className="flex font-medium text-3xl text-wrap">No!</span>
                                <span className="flex font-light text-left">Mail verificata con successo.
                                    Adesso puoi effettuare il login.
                                </span>
                                <div>
                                    <Link to="/login" className="flex text-left font-medium underline text-balance text-green-700">
                                        Login
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    )
}