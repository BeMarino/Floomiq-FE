import { Link } from "react-router-dom"

export default function Tutorial() {

    let imageUrl = "url('bg.svg')"
    let tutorial1 = "url('tutorial1.png')"
    let tutorial2 = "url('tutorial2.png')"

    return (
        <div className="flex flex-col w-full">
            <div className="h-screen bg-center bg-no-repeat" style={{ "backgroundImage": imageUrl }}>
                <div className="w-4/5 flex flex-col mt-[5%] ml-[5%] self-center">
                    <div className="text-left font-extrabold text-6xl text-lime-500">Floomiq</div>
                    <div className="text-left font-extrabold text-3xl text-wrap mt-[5%]">
                        <p>Il <span className="text-lime-500">“Cerca piante” </span>che apre il mondo agli appassionati di piante e ai professionisti del settore</p></div>
                </div>
                <div className="w-4/5 flex flex-col mt-[5%] ml-[5%] self-center">
                    <div className="text-left font-extrabold w-2/3 text-wrap">
                        <p>Che tu abbia un pollice verde esperto o sia alle prime armi
                            il nostro strumento di ricerca ti guiderà passo dopo passo nella selezione della pianta giusta.</p>
                    </div>
                </div>
                <div className="w-4/5 flex flex-col mt-[5%] ml-[5%] self-center">
                    <div className="text-left font-extrabold w-1/2 text-wrap">
                        <p>Lasciati ispirare dal nostro vasto database di piante per
                            trovare quella ideale per il tuo ambiente e stile di vita </p>
                    </div>
                </div>
                <div className="w-full flex flex-col mt-[5%] self-center">
                    <div className="w-full flex flex-row  text-left font-extrabold justify-center text-wrap">
                        <Link to="/explore-plants" className="bg-lime-500 p-2 border-solid border-2 border-gray-500" >Cerca piante</Link>
                    </div>
                </div>
            </div>
            <div className="h-full mb-[5%]">
                <div className="w-4/5 flex flex-col mt-[5%] ml-[10%] self-center justify-center">
                    <div className="w-full text-center  font-extrabold text-4xl ">Come funziona?</div>
                    <div className="text-left font-extrabold text-xl text-wrap mt-[2%]">
                        <p>Vuoi sapere quali piante si addicono meglio alle tue esigenze? Lasciati ispirare dal nostro vasto database.</p></div>
                </div>
                <div className="w-[80%] p-4 grid grid-cols-3 grid-rows-2 gap-y-4 gap-x-8 mt-[2%]  ml-[10%] self-center border-lime-500 border-solid rounded-lg border-2">
                    <div className="flex flex-col shadow-md justify-between border-solid rounded-md border-gray-400 border-2 w-full p-2 h-full">
                        <div className="flex bg-lime-300 rounded-md ml-[5%] w-[90%] justify-center">Accedi allo strumento</div>
                        <div className="flex w-full p-5 bg-center bg-no-repeat justify-center" >
                            <img src="tutorial1.png" className="h-28"></img>
                        </div>
                        <div className="flex rounded-md ml-[5%] w-[90%] justify-center">Clicca il pulsante “Cerca Piante”
                            per entrare nella nostra enciclopedia verde</div>
                    </div>
                    <div className="flex flex-col shadow-md justify-between border-solid rounded-md border-gray-400 border-2 w-full p-2 h-full">
                        <div className="flex bg-lime-300 rounded-md ml-[5%] w-[90%] justify-center">Seleziona i filtri</div>
                        <div className="flex w-full p-5 bg-center bg-no-repeat justify-center" >
                            <img src="tutorial2.png" className="h-28"></img>
                        </div>
                        <div className="flex rounded-md ml-[5%] w-[90%] justify-center">Trova le piante adatte alle tue esigenze</div>
                    </div>
                    <div className="flex flex-col shadow-md justify-between border-solid rounded-md border-gray-400 border-2 w-full p-2 h-full">
                        <div className="bg-lime-300 rounded-md ml-[5%] w-[90%]">Seleziona le piante</div>
                        <div className="flex w-full p-5 bg-center bg-no-repeat justify-center" >
                            <img src="tutorial2.png" className="h-28"></img>
                        </div>
                        <div className="flex rounded-md ml-[5%] w-[90%] justify-center">Seleziona le piante tramite il pulsante +</div>
                    </div>
                    <div className="flex flex-col shadow-md justify-between border-solid rounded-md border-gray-400 border-2 w-full p-2 h-full">
                        <div className="bg-lime-300 rounded-md ml-[5%] w-[90%]">Aggiungi le piante ai preferiti</div>
                        <div className="flex w-full p-5 bg-center bg-no-repeat justify-center" >
                            <img src="tutorial2.png" className="h-28"></img>
                        </div>
                        <div className="flex rounded-md ml-[5%] w-[90%] justify-center">Aggiungi le piante tra i tuoi preferiti</div>
                    </div>
                    <div className="flex flex-col shadow-md justify-between border-solid rounded-md border-gray-400 border-2 w-full p-2 h-full">
                        <div className="bg-lime-300 rounded-md ml-[5%] w-[90%]">Salva la tua selezione</div>
                        <div className="flex w-full p-5 bg-center bg-no-repeat justify-center" >
                            <img src="tutorial2.png" className="h-28"></img>
                        </div>
                        <div className="flex rounded-md ml-[5%] w-[90%] justify-center">Registrati su MyFloomiq per avere sempre a portata di mano le piante da te scelte</div>
                    </div>
                    <div className="flex flex-col shadow-md justify-between border-solid rounded-md border-gray-400 border-2 w-full p-2 h-full">
                        <div className="bg-lime-300 rounded-md ml-[5%] w-[90%]">Esporta in PDF</div>
                        <div className="flex w-full p-5 bg-center bg-no-repeat justify-center" >
                            <img src="tutorial2.png" className="h-28"></img>
                        </div>
                        <div className="flex rounded-md ml-[5%] w-[90%] justify-center">Clicca sul logo “PDF” per scaricare la presentazione con la selezione delle piante scelte </div>                    </div>
                </div>
            </div>
            <div className="h-full mb-[5%]">
                <div className="w-4/5 flex flex-col mt-[5%] ml-[10%] self-center justify-center">
                    <div className="w-full font-extrabold text-4xl text-center">Professionisti del verde</div>
                    <div className="text-center  text-xl text-balance  mt-[2%]">
                        <p>Cerchi una <span className="font-bold">consulenza</span> personalizzata per il tuo giardino, terrazzo o spazio verde? <br></br>
                            Floomiq ti offre soluzioni su misura per ogni esigenza.<br></br><br></br>

                            Grazie alla nostra ampia rete di contatti, potrai trovare il <span className="font-bold">professionista</span> più adatto alle tue necessità.
                            <br></br> Collaboriamo con un vasto assortimento di Architetti del Paesaggio, Vivaisti, Giardinieri e altri esperti del settore.<br></br><br></br>

                            Clicca sulla sezione <span className="font-bold">“Cerca Professionista”</span> e scopri il professionista del verde più vicino a te
                            a seconda della tua regione
                        </p></div>
                </div>
            </div>
            <div className="h-full mb-[5%]">
                <div className="w-4/5 flex flex-col mt-[5%] ml-[10%] self-center justify-center">
                    <div className="w-full font-extrabold text-4xl text-center">Blog</div>
                    <div className="text-center  text-xl text-balance  mt-[2%]">
                        <p>Rimani aggiornato sulle ultime tendenze e novità.<br></br><br></br>

                            Grazie alla nostra ampia rete di contatti, potrai trovare il <span className="font-bold">professionista</span> più adatto alle tue necessità.
                            <br></br> Collaboriamo con un vasto assortimento di Architetti del Paesaggio, Vivaisti, Giardinieri e altri esperti del settore.<br></br><br></br>

                            Clicca sulla sezione <span className="font-bold">“Cerca Professionista”</span> e scopri il professionista del verde più vicino a te
                            a seconda della tua regione
                        </p></div>
                </div>
                <div className="w-[80%] p-4 grid grid-cols-3 grid-rows-2 gap-y-4 gap-x-8 mt-[2%]  ml-[10%] self-center border-lime-500 border-solid rounded-lg border-2">

                    <div className="flex flex-col  bg-lime-300 shadow-md justify-between p-2 h-full">
                        <div className="flex rounded-md ml-[5%] w-[90%] justify-center"></div>
                        <div className="flex w-full p-5 bg-center bg-no-repeat justify-center" >
                            <img src="tutorial1.png" className="h-28"></img>
                        </div>
                        <div className="flex rounded-md ml-[5%] w-[90%] justify-center">Clicca il pulsante “Cerca Piante”
                            per entrare nella nostra enciclopedia verde</div>
                    </div>
                    <div className="flex flex-col  bg-lime-300 shadow-md justify-between  w-full p-2 h-full">
                        <div className="flex rounded-md ml-[5%] w-[90%] justify-center">Seleziona i filtri</div>
                        <div className="flex w-full p-5 bg-center bg-no-repeat justify-center" >
                            <img src="tutorial2.png" className="h-28"></img>
                        </div>
                        <div className="flex rounded-md ml-[5%] w-[90%] justify-center">Trova le piante adatte alle tue esigenze</div>
                    </div>
                    <div className="flex flex-col  bg-lime-300 shadow-md justify-between w-full p-2 h-full">
                        <div className="rounded-md ml-[5%] w-[90%]">Seleziona le piante</div>
                        <div className="flex w-full p-5 bg-center bg-no-repeat justify-center" >
                            <img src="tutorial2.png" className="h-28"></img>
                        </div>
                        <div className="flex rounded-md ml-[5%] w-[90%] justify-center">Seleziona le piante tramite il pulsante +</div>
                    </div>
                    <div className="flex flex-col  bg-lime-300 shadow-md justify-between w-full p-2 h-full">
                        <div className="rounded-md ml-[5%] w-[90%]">Aggiungi le piante ai preferiti</div>
                        <div className="flex w-full p-5 bg-center bg-no-repeat justify-center" >
                            <img src="tutorial2.png" className="h-28"></img>
                        </div>
                        <div className="flex rounded-md ml-[5%] w-[90%] justify-center">Aggiungi le piante tra i tuoi preferiti</div>
                    </div>
                    <div className="flex flex-col  bg-lime-300 shadow-md justify-between w-full p-2 h-full">
                        <div className="rounded-md ml-[5%] w-[90%]">Salva la tua selezione</div>
                        <div className="flex w-full p-5 bg-center bg-no-repeat justify-center" >
                            <img src="tutorial2.png" className="h-28"></img>
                        </div>
                        <div className="flex rounded-md ml-[5%] w-[90%] justify-center">Registrati su MyFloomiq per avere sempre a portata di mano le piante da te scelte</div>
                    </div>
                    <div className="flex flex-col  bg-lime-300 shadow-md justify-between w-full p-2 h-full">
                        <div className="rounded-md ml-[5%] w-[90%]">Esporta in PDF</div>
                        <div className="flex w-full p-5 bg-center bg-no-repeat justify-center" >
                            <img src="tutorial2.png" className="h-28"></img>
                        </div>
                        <div className="flex rounded-md ml-[5%] w-[90%] justify-center">Clicca sul logo “PDF” per scaricare la presentazione con la selezione delle piante scelte </div>                    </div>
                </div>
            </div>
        </div>
    )
}