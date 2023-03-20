import React from 'react';
import {AccordionBodyPropsType, AccordionPropsType, AccordionTitlePropsType} from "../Type";


export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return <div>
        <AccordionTitle titlle={props.titleValue}/>
        {!props.collapsed && <AccordionBody/>}
    </div>

}


function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("title rendering")
    return <h3 className={"AccordionTitle"}>{props.titlle}</h3>
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("body rendering")
    return <ul>
        <li>15</li>
        <li>20</li>
        <li>35</li>
    </ul>
}

export default Accordion;
