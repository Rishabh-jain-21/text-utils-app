import React, { useEffect, useState } from "react";
import copy from "../Images/copy.png";
import delete_img from "../Images/delete.png";

const Display = (props) => {

    const [input, setInput] = useState("");

    const handleChange = e => {
        setInput(e.target.value);
    }

    const clearText = () => {
        const newText = '';
        setInput(newText);
    }

    //copy text
    function copyText() {
        var copyText = document.getElementById("myInput");

        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);

        /* Alert the copied text */
        alert("Copied the text: " + copyText.value);
    }

    // counting characters
    function countCharacters() {
        let str = input;
        let spaces = 0;
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) === ' ') {
                spaces++;
            }
        }
        return str.length - spaces;
    }

    //counting words logic  
    const countWords = () => {
        let str = input;
        let count = 1;
        for (let i = 0; i < str.length - 1; i++) {
            if (str.charAt(i) === ' ' && str.charAt(i + 1) != ' ') {
                count = count + 1;
            } else if (str.charAt(i) === ' ' && str.charAt(i + 1) === ' ') { continue; }
        }
        if (str.length === 0) {
            return 0;
        }
        else {
            return count;
        }
    }
    return (
        <>
            <div className="main-Container">
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <h1 style={{ marginTop: 10 }}>{props.heading}</h1>
                    <h3>{input.length}</h3>
                </div>
                <div>
                    <textarea className="input-area" spellCheck="true" placeholder="Enter Your Text" onChange={handleChange} value={input} id="myInput"></textarea>
                    <img src={copy} alt="copy-text" className="textarea-img" onClick={copyText} />
                    <img src={delete_img} className="textarea-img2" alt="delete-text" onClick={clearText} />
                    <h4>Your Text Details : </h4>
                    <p>Approximate Words = {countWords()}</p>
                    <p>Approximate Characters = {countCharacters()}</p>

                </div>
            </div>
        </>
    );
};
export default Display;