export default function RegisteredDialog(props) {
    let imageUrl = "url('registration.svg')";
    return (
        <>
            <div className="absolute w-screen h-full self-center  backdrop-blur-lg items-center z-30" >
                <div className="flex flex-row divide-x-2 divide-solid divide-emerald-500 py-2 w-1/2 mt-[20%] ml-[25%] border-solid border-2 border-slate-300	bg-white  rounded self-center">
                    <div className="bg-cover bg-no-repeat p-16" >
                        <img src="registration.svg" className="h-[128px] w-[128px]"></img>
                    </div>
                    <div className="flex alert-white">
                        <div className="flex flex-col justify-between p-2">
                            <span className="flex font-medium text-3xl text-wrap">Benvenuto!</span>
                            <span className="flex font-light text-left">Registrazione avvenuta con successo.
                                Clicca sul link di verifica che ti abbiamo mandato via mail.</span>
                            <div>
                                <span className="flex font-light text-left">Non hai ricevuto la mail?
                                </span>
                                <span className="flex text-left font-medium underline text-balance text-green-700">
                                    Invia di nuovo
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}