import { Label, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
import { API } from "../../APIService/API";

export default function NewProjectDialog({ sideCartProductList, setIsLoading, user, setShowProjectCreated, setShowErrorMessage, setErrorMessage, setShowCreateProjectDialog}) {

    const closeCreateProjectDialog = () => {
        setShowCreateProjectDialog(false)
      }

      const [projectName, setProjectName] = useState("");
    const [projectDesc, setProjectDesc] = useState("");


    const handleProjectNameChange = (e) => {
        setProjectName(e.target.value)
    }
    const handleProjectDescChange = (e) => {
        setProjectDesc(e.target.value)
    }

    function submitProject() {
        if(projectName !== ""){
        setIsLoading(true)
        let plants = []
        sideCartProductList.map((element, index) => (
            plants = [...plants, { id: element.id }])
        )
        let body = { name: projectName, description: projectDesc, owner: user.username, plants: plants }
        API.submitProject(body).then((response) => {
            if (response.status === 200) {
                // Authentication was successful
                setShowCreateProjectDialog(false)
                setShowProjectCreated(true);
            } else {
                setShowErrorMessage(true)
            }
        }).catch(err => {
            setErrorMessage(err.response.data);
            setShowCreateProjectDialog(false)
            setShowErrorMessage(true)
        }
        ).finally(() => {
            setIsLoading(false)
        });}
    }

    return <div className="absolute w-screen h-screen self-center  backdrop-blur-lg items-center z-30" >
        <form type='submit' onSubmit={e => e.preventDefault()}
            className="flex flex-col sm:h-fit h-4/5  sm:w-1/2 w-4/5 p-4 gap-4 sm:mt-[10%] mt-[25%] sm:ml-[25%] ml-[10%] border-solid border-2 border-slate-300	bg-white  rounded self-center">
            <div className='flex sm:flex-row flex-col items-stretch w-full'>
                <div className="mb-2 block self-start text-left sm:w-1/4 w-full">
                    <Label htmlFor="nome" value="Nome progetto" />
                </div>
                <TextInput
                    id="nome"
                    type="text"
                    placeholder="Giardino inglese"
                    required
                    className='sm:w-3/4'
                    value={projectName} onChange={handleProjectNameChange}

                />
            </div>
            <div className='flex sm:flex-row flex-col items-stretch w-full'>
                <div className="mb-2 block self-start text-left sm:w-1/4 w-full">
                    <Label htmlFor="descrizione" value="Descrizione progetto" />
                </div>
                <Textarea
                    id="nome"
                    type="text"
                    placeholder="Giardino inglese"
                    className='sm:w-3/4'
                    value={projectDesc} onChange={handleProjectDescChange}

                />
            </div>
            <div className="flex sm:flex-row flex-col items-stretch w-full sm:h-fit h-full overflow-scroll">
                <div className="mb-2 block self-start text-left sm:w-1/4 w-full">
                    <Label htmlFor="Le tue piante" value="Le tue piante" />
                </div>
                <div className='flex flex-row gap-1 flex-wrap w-3/4'>
                    {sideCartProductList.map((_, index) => (
                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                            {sideCartProductList[index].nome}
                        </span>
                    ))}
                </div>
            </div>
            <div className="flex sm:flex-row flex-col justify-center sm:gap-12 gap-2 sm:px-0 px-2 ">
                <button className='button border-black border-2 border-solid hover:bg-green-400 bg-[#a0df3b] button-sign-up' onClick={submitProject}> Salva</button>
                <button className='button border-black border-2 border-solid  button-sign-up bg-red-600 hover:bg-red-400 text-white' onClick={closeCreateProjectDialog}>Annulla</button>
            </div>
        </form>

    </div>
}