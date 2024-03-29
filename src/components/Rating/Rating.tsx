 import React from "react";
 import {action} from "@storybook/addon-actions";
 import './Ratting.css';

export type RatingValueType= 0|1|2|3|4|5


export type RatingPropsType = {
    value: RatingValueType
    onClick:(value:RatingValueType) => void

}


 //есть в сторибук
export function Rating(props:RatingPropsType) {
    return (

        <div className={"rating"}>
            <div className={"star"}>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
            </div>
         </div>
    )
};


 type StarPropsType = {
     selected:boolean
     value:RatingValueType
     onClick:(value:RatingValueType) => void

 }
export function Star(props:StarPropsType ) {
    console.log("Rating rendering")
    return <span onClick={()=>{props.onClick(props.value)} }>
        {props.selected ? <b> star </b> : "star "}

    </span>

}

