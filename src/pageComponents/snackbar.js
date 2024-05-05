import { useState, useEffect } from "react";
import { IoMdCloseCircle } from "react-icons/io";

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

    const alertType = type === 'error' ? 'alert-danger' : 'alert-success';
    return (
        <>
            {visible && (
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm" >
                <div className={`alert ${alertType} alert-white rounded`}>
                    <button type="button" className="close" onClick={() => setVisible(false)} aria-hidden="true">
                    ×</button>
                    <div className="icon"><i><IoMdCloseCircle /></i></div>
                    {message}
                    <div class="progress-bar blue stripes">
                       
                    </div>
                </div>
                </div>
            )}
        </>
    );
}