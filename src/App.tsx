import React, {useState} from 'react';
import './App.css';
import OnnOff from "./components/state";
import On from "./components/OnOff";
import {Rating} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";



// function hello (){
//     alert("Hello")
// }
// hello();



function App() {
    console.log("App rendering")
    return (
        <div className="App">

            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My star"}/>
            <img src={"https://www.ar.meirc.com/assets/images/course-image/course/customer-complaint-system-courses.jpg"}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Accordion titleValue={"Mеню первое!"} collapsed={true}/>
            <Accordion titleValue={"User"} collapsed={false}/>
            <OnnOff/>
            <On on={false}/>
        </div>
    );
}

function PageTitle(props: any) {
    return <div>
        <h3>{props.title}</h3>
    </div>
}


export default App;
