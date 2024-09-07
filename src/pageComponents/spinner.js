export default function Spinner(){

    return (
        <div className="absolute items-center w-screen h-screen backdrop-blur-md z-50">
            <div className="absolute top-[50%] right-[50%] self-center items-center">
                <div className="spinner"></div>
            </div>
        </div>
    )
}