import React from 'react';


export type AccordionPropsType = {
    titleValue: string
    onClick: (accordionCollapsed:boolean) => void
    accordionCollapsed:boolean
}


export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return <div>
        <AccordionTitle  title={props.titleValue} onClick={props.onClick}  accordionCollapsed={!props.accordionCollapsed }/>
        {!props.accordionCollapsed && <AccordionBody/>}
    </div>

}

export type AccordionTitlePropsType = {
   title:string
    accordionCollapsed:boolean
    onClick:(accordionCollapsed:boolean) => void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("title rendering")
    return <h3 onClick={()=> {props.onClick(props.accordionCollapsed)}}>--{props.title}--</h3>
}

type AccordionBodyPropsType = {

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
