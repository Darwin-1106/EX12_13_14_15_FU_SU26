import { useState } from "react";
import './css/Q1.css';
function Q1 () {
    const [countClick, setCountClick] = useState(0);

    const handleClick = () => {
        setCountClick(countClick + 1);
    }

    return (
        <>
            <input className="btn-q1" type="submit" onClick={handleClick} value="Click me"></input>
            <br/>
            <span>Count: {countClick}</span>
        </>
    )    
}
export default Q1;