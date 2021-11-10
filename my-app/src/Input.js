import React from "react";
import './Input.css'





const Input = (props) => {





    return(
        <div>
            <input type={"text"} id={"InputVal"} placeholder={"SEARCH HERE"} className={"input"} onChange={props.Change}/>
        </div>
    )
}


export default Input;