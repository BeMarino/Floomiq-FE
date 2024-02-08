import React from "react";
import { useState, useRef } from "react";

function CollapsablePlantDescription (props) {
    const [isCollapsed, setIsCollapsed] = useState(true);
  const [textareaValue, setTextareaValue] = useState(props.description.substring(0, 200)); // Display only first 50 characters
  const descriptionRef = useRef(props.description); // Store the original description using useRef

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    if (!isCollapsed) {
      setTextareaValue(descriptionRef.current.substring(0, 200)); // Expand to show full description
    } else {
      setTextareaValue(descriptionRef.current); // Collapse to show only first 50 characters
    }
  };

  return (
    <div className="main-collpsable">
      <div onClick={toggleCollapse} style={{ cursor: 'pointer'}}>
        <a>{isCollapsed ? `${textareaValue}...` : textareaValue}</a>
      </div>
      
    </div>
  );
};
 
 

 
export default CollapsablePlantDescription;