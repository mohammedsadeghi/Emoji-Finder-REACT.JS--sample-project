import React from "react";
import './Emoji.css'




const Emoji =(props)=>{




    return(
        
            <div className={"emoji__container"}>
                <span className={"emoji__span"}>{props.children}</span>
                <span className={"emoji__title"}>{props.title}</span>
            </div>
        
    )
}

export default Emoji;