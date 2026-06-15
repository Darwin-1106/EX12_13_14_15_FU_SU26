import { useState } from "react";

function Q3() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <button onClick={toggleVisibility}>{isVisible ? "Hide" : "Show"}
            </button>
            {isVisible && <p>Toggled me</p>}
        </div>
    );
}

export default Q3;