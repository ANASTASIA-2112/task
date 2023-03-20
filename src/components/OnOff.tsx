 import React, {useState} from 'react';



type OnOffPropsType = {
    on:boolean

}

const On = (props:OnOffPropsType) => {

    let [ons,setOn]= useState(false);

    const onStyle ={
        width:"30px",
        height:"20px",
        border: "1px solid black",
        display:"inline-block",
        marginLeft:"5px",
        padding:"2px",
        background: ons ? "green": "white"
    };

    const offStyle ={
        width:"30px",
        height:"20px",
        border: "1px solid black",
        display:"inline-block",
        marginLeft:"5px",
        padding:"2px",
        background: ons ? "white": "red"
    };
    const indecatorStyle ={
        width:"10px",
        height:"10px",
        borderRadius:"15px",
        border: "1px solid black",
        display:"inline-block",
        marginLeft:"5px",
        background: ons ? "green": "red"

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

export default On;