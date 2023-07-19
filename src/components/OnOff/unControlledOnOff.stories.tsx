import React from 'react';
import {action} from '@storybook/addon-actions';
import { UncntrolledOff} from './unControlledOnOff';




export default {
    title:"UncntrolledOff",
    component:UncntrolledOff,
};

 const  callback = action(" on or off cliked");

//режим включенный
export const OnMode=()=><UncntrolledOff  defaultOn={true} onChange={callback}/>
//режим отключен
export const OffMode=()=><UncntrolledOff  defaultOff={false} onChange={callback}/>

//инпут с фиксированным текстом readOnly={true} или value={"yo"}

//не хатим контролировать, а что-то передаем
export const DefaultInputValue=()=><input defaultValue={"yo"} readOnly={true} />//текст печатаеться
//readOnly={true} режим только на чтение
//onChange={callback} - компонент input будет сообщать, что хочет поменяться и изменить
