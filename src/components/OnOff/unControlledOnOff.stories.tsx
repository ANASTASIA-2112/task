import React from 'react';
import {action} from '@storybook/addon-actions';
import {On} from './unControlledOnOff';




export default {
    title:"On",
    component:On,
};

 const  callback = action(" on or off cliked");

//режим включенный
export const OnMode=()=><On  defaultOn={true} onChange={callback}/>
//режим отключен
export const OffMode=()=><On  defaultOff={false} onChange={callback}/>

//инпут с фиксированным текстом readOnly={true} или value={"yo"}

//не хатим контролировать, а что-то передаем
export const DefaultInputValue=()=><input defaultValue={"yo"} />//текст печатаеться

