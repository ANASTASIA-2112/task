import React from "react";
import {RatingPropsType, StarPropsType} from "../Type";

export function Rating(props:RatingPropsType) {
    debugger
    console.log("Rating rendering")

    return (

        <div >
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
            <Star selected={props.value > 5}/>
        </div>
    )
}
export function Star(props:StarPropsType ) {
    console.log("Rating rendering")
    debugger
    if (props.selected === true) {
        return <span className={"active"}><b>star</b> </span>
    } else {
        return <span>star </span>
    }
}

