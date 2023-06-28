import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {UncontroledAccordion} from './UncontrolledAccordion';




export default {
    title:"UncontroledAccordion",
    component:UncontroledAccordion,
};
//событие сгенирированно
 const  callback = action(" accordion mode change event fired ");



export const ModeChanging=()=> {

   return <UncontroledAccordion titleValue={"Users"}  />
};