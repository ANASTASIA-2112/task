import React from 'react';

function Accordion() {
    console.log("Accordion rendering")
    return (
        <>
            <AccordionTitle/>
            <AccordionBody/>
        </>

    );
}

function AccordionTitle() {
    console.log("title rendering")
    return <h3>Mеню</h3>
}
function AccordionBody() {
    console.log("body rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion;
