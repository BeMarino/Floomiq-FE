import { Link } from "react-router-dom";

export default function LoginRequiredDialog({ setShowLoginRequired }) {

    const toggleDialog = () => {
        setShowLoginRequired(false)
    }

    return (
        <div className="absolute w-screen h-full self-center  backdrop-blur-lg items-center z-30" >
            <div className="flex flex-row divide-x-2 divide-solid divide-emerald-500 py-2 w-1/2 mt-[10%] ml-[25%] border-solid border-2 border-slate-300	bg-white  rounded self-center">
                <div className="bg-cover bg-no-repeat p-16" >
                    <img src="registration.svg" className="h-[128px] w-[128px]"></img>
                </div>
                <div className="flex alert-white">
                    <div className="flex flex-col justify-between p-2">
                        <span className="flex font-medium text-3xl text-wrap">Login richiesto</span>
                        <span className="flex font-light text-left">Per procedere è necessario aver effettuato il login.</span>
                        <div>
                            <Link to="/login" className="flex text-left font-medium underline text-balance text-green-700">
                                Login
                            </Link>
                        </div>
                        <button className='button border-black border-2 border-solid  button-sign-up bg-white hover:bg-green-400 text-black' onClick={toggleDialog}>
                            Chiudi
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}