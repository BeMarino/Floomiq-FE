import { Link } from "react-router-dom";

export default function ErrorDialog({ projectName, errorMessage, setShowErrorMessage }) {
    
    const toggleErrorDialog=()=>{
        setShowErrorMessage()
    }
    
    return (

        <div className="absolute w-screen h-screen self-center  backdrop-blur-lg items-center z-50" >
            <div className="flex flex-row divide-x-2 divide-solid divide-red-500 py-2 w-1/2 mt-[10%] ml-[25%] border-solid border-2 border-slate-300	bg-white  rounded self-center">
                <div className="bg-cover bg-no-repeat p-16" >
                    <img src="sad_plant.jpg" className="h-[20vh] w-[20vh]"></img>
                </div>
                <div className="flex px-8">
                    <div className="flex flex-col justify-between py-2 items-stretch">
                        <span className="flex font-medium text-3xl text-wrap">Ops!</span>
                        <span className="flex font-light text-left">Qualcosa è andato storto.</span>
                        <div>
                            <span className="flex font-light text-left">
                                {errorMessage}
                            </span>
                            
                        </div>
                        <button className='button border-black border-2 border-solid  button-sign-up bg-white hover:bg-green-400 text-black' onClick={toggleErrorDialog}>
                            Chiudi
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}