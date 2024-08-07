export default function Spinner(){

    return (
        <div className="absolute w-screen h-screen backdrop-blur-md z-50">
            <div className="top-[25%] right-[25%] self-center items-center">
                <div className="spinner"></div>
            </div>
        </div>
    )
}