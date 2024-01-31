// Code Keypad Component Here
import React from "react";
function Keypad (){
    function passwordEntry(){
        console.log('Entering password...')
    }
    return (
        <div>
        <input 
        type="password"
        name="passwordInput"
        onChange={passwordEntry}/></div>
    )
}

export default Keypad;