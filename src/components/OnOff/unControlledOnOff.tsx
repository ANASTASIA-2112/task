import React, {useState} from 'react';



export type OnOffPropsType = {
    onChange: (on:boolean) => void
    defaultOn?:boolean
    defaultOff?:boolean

}
//есть в сторибук

export function On (props: OnOffPropsType) {
    let [on,setOn]=useState(props.defaultOn ? props.defaultOn:false)

    let onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        background: props.defaultOn ? "green" : "white"
    };

    let offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        background: props.defaultOn? "white" : "red"
    };
    let indecatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        background: props.defaultOn? "green" : "red"

    };

    return (
        <div>
            <div style={onStyle} onClick={()=> {props.onChange(true)}}>On</div>
            <div style={offStyle} onClick={()=> {props.onChange(false)}}>Off</div>
            <div style={indecatorStyle}></div>
        </div>
    );
};

