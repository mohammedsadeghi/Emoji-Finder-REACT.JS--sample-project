import React from "react";
import './Display.css';



const Display= (props) =>{




    return(
        <div className={"display"}>
            <button act name={"Grid view"}value={"list view"} className={"btn"}>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" className={"btn__svg"}  fill="#000000">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"/>
                </svg>
            </button>
            <button  name={"List view"}value={"grid view"} className={"btn"}>
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"  viewBox="0 0 24 24" className={"btn__svg"}  fill="#000000">
                    <rect fill="none" height="24" width="24"/>
                    <path d="M3,5v14h18V5H3z M7,7v2H5V7H7z M5,13v-2h2v2H5z M5,15h2v2H5V15z M19,17H9v-2h10V17z M19,13H9v-2h10V13z M19,9H9V7h10V9z"/>
                </svg>
            </button>
        </div>
    )
}


export default Display;