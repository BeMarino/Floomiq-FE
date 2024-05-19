import { IoMdCloseCircle } from "react-icons/io";
import { useState } from "react";
import { useEffect } from "react";

export default function SnackBar(props) {
    const { type, message, duration = 3000 } = props;
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, duration);

        return () => {
            clearTimeout(timer);
        };
    }, [duration]);
    let imageUrl = "url('sad_plant.jpg')";
    return (
        <>
            {visible && (
                <div className="absolute w-screen h-full self-center  backdrop-blur-lg items-center z-30" >
                    <div className="flex flex-row divide-x-2 divide-solid divide-emerald-500 py-2 w-1/2 mt-[25%] ml-[25%] border-solid border-2 border-slate-300	bg-white  rounded self-center">
                        <div className="h-32 w-32 bg-cover bg-no-repeat" style={{"backgroundImage": imageUrl}}>

                        </div>
                        <div className="flex alert-white  items-center">
                            <div className="self-center items-center items-baseline">{message}</div>
                            <div className="progress-bar stripes">

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}