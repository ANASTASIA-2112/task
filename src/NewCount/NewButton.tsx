import React, {ChangeEvent} from 'react';


type PropsType = {
    onclick?:(e: React.FormEvent<HTMLInputElement>)=>void
    handleIncrement: () => void
    handleReset: () => void
    handleSet: () => void

}

export const NewButton = ( props:PropsType ) => {

    return (
        <div>
            <button className={"btn"}onClick={props.handleIncrement}>inc</button>
            <button className={"btn"} onClick={props.handleReset}>reset</button>
            <div className={"btn3"}>
                <button onClick={props.handleSet}>Set</button>
            </div>
        </div>
    );
};

export default NewButton;