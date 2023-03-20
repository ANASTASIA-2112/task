import React, {useState} from 'react';

type PropsType={
    //on:boolean
}


export function  OnnOff (props:PropsType) {
  let [on,setOn] = useState(false);


    const onStyle ={
        width:"30px",
        height:"20px",
        border: "1px solid black",
        display:"inline-block",
        marginLeft:"5px",
        padding:"2px",
        background:  on ? "green": "white"
    };

    const offStyle ={
        width:"30px",
        height:"20px",
        border: "1px solid black",
        display:"inline-block",
        marginLeft:"5px",
        padding:"2px",
        background: on ? "white": "red"
    };
    const indecatorStyle ={
        width:"10px",
        height:"10px",
        borderRadius:"15px",
        border: "1px solid black",
        display:"inline-block",
        marginLeft:"5px",
        background: on ? "green": "red"

    };
    return (
        <div>
        <div style={onStyle}
             onClick={()=> setOn(true)}>On</div>
        <div style={offStyle}
             onClick={()=>setOn(false)}>Off</div>
        <div style={indecatorStyle}></div>
        </div>
    );
};

export default  OnnOff;