import { Link } from "react-router-dom";

export default function SuccessDialog({ projectName, setShowProjectCreated }) {
    const closeDialog=()=>{
        setShowProjectCreated(false);
    }
    return (

        <div className="absolute w-screen h-screen self-center  backdrop-blur-lg items-center z-30" >
            <div className="flex flex-row divide-x-2 divide-solid divide-emerald-500 py-2 w-1/2 mt-[10%] ml-[25%] border-solid border-2 border-slate-300	bg-white  rounded self-center">
                <div className="bg-cover bg-no-repeat p-16" >
                    <img src="registration.svg" className="h-[128px] w-[128px]"></img>
                </div>
                <div className="flex alert-white">
                    <div className="flex flex-col justify-between p-2">
                        <span className="flex font-medium text-3xl text-wrap">Congratulazioni!</span>
                        <span className="flex font-light text-left">Il progetto {projectName} è stato creato con correttamente!</span>
                        <div>

                            <div className="flex flex-row">
                            <span className="flex font-light text-left">Accedi alla sezione &#8202;
                                <Link to="/my-projects" className="flex text-left font-medium underline text-balance text-green-700">
                                    I miei progetti
                                </Link>
                                &#8202; per visualizzarlo.</span></div>


                        </div>
                        <button className='button border-black border-2 border-solid  button-sign-up bg-white hover:bg-green-400 text-black' onClick={closeDialog}>
                            Chiudi
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}