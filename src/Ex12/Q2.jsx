import { useState } from "react";

function Q2 () {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    };
    return (
        <div>
            <input type="text" value={text} onChange={handleChange} />
            <p>Input text: {text}</p>
        </div>
    );
}
export default Q2;