import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion} from './Accordion';




export default {
    title:"Accordion",
    component:Accordion,
};
//событие сгенирированно
 const  callback = action(" accordion mode change event fired ");

//развернутый
export const MenuCollapsedMode=()=><Accordion titleValue={"Menu"} accordionCollapsed={true}  onClick={callback}/>
//свернутый
export const UsersUnCollapsedMode=()=><Accordion titleValue={"Users"} accordionCollapsed={false}  onClick={callback}/>

export const ModeChanging=()=> {
    const [value,setValue]=useState<boolean>(true)
    //onChange меняет на противоположное значение /если просто сробатываешь ты хочешь поменяться на противоположное
   return <Accordion titleValue={"Users"} accordionCollapsed={value}  onClick={setValue}/>
};