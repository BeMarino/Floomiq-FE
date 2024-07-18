import { useState } from "react";
import '../../css/tabSwitch.css'; // Import your style

const TabSwitch = ({nameLeft, nameMiddle, nameRight, onLeftSelected, onMiddleSelected, onRightSelected, activeTab}) => {
    const directions = ['left', 'middle', 'right'];
    const [direction, setDirection] = useState(directions[activeTab]);

    const handleClick = (direction, index) => {
        setDirection(direction);
        if(index===0) onLeftSelected()
        else if(index===1) onMiddleSelected()
            else onRightSelected();
    };

    return (
        <div className="container">
            <div class="wrapper">
                <div className={`taeb-switch ${direction}`}>
                    {['left', 'middle', 'right'].map((dir, index) => (
                        <div
                            key={index}
                            className={`taeb ${activeTab === index ? 'active' : ''}`}
                            taeb-direction={dir}
                            onClick={() => handleClick(dir, index)}
                        >
                            {dir==='left' ? nameLeft : ""}
                            {dir==='middle' ? nameMiddle : ""}
                            {dir==='right' ? nameRight : ""}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TabSwitch;