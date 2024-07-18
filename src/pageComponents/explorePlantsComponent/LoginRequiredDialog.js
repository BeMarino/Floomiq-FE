import { Link } from "react-router-dom";

export default function LoginRequiredDialog({ setShowLoginRequired }) {

    const toggleDialog = () => {
        setShowLoginRequired(false)
    }

    return (
        <div className="absolute w-screen h-full self-center  backdrop-blur-lg items-center z-[200]" >
            <div className="flex sm:flex-row flex-col sm:divide-x-2 divide-solid sm:h-fit h-4/5 divide-emerald-500 py-2 sm:w-1/2 w-4/5 sm:mt-[10%] mt-[25%] sm:ml-[25%] ml-[10%] border-solid border-2 border-slate-300	bg-white  rounded self-center">
                <div className="w-full content-center items-center justify-center">
                    <span className="sm:hidden flex font-medium text-3xl sm:ml-0 ml-[10%]">Login richiesto</span>
                    <div className="bg-cover bg-no-repeat self-center items-center sm:mt-0 mt-[10%]" >
                        <img src="registration.svg" className="h-32 w-32 self-center ml-[30%]"></img>
                    </div>
                </div>
                <div className="flex alert-white h-full sm:mt-0 mt-[30%]">
                    <div className="flex flex-col  sm:p-2">
                        <span className="sm:flex hidden font-medium text-3xl text-wrap">Login richiesto</span>
                        <span className="flex font-light text-left">Per procedere è necessario aver effettuato il login.</span>
                        <Link to="/login" className="sm:mt-0 mt-6 button is-primary button-sign-up flex text-left font-medium text-balance text-green-700">
                            Login
                        </Link>
                        <button className='button sm:mt-0 mt-3 border-black border-2 border-solid  button-sign-up bg-white hover:bg-green-400 text-black' onClick={toggleDialog}>
                            Chiudi
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}