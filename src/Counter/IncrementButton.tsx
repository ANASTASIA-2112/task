import React, {useState} from "react";

//
// export type IncrementButtonType = {
//     onClick: () => void
//     disabled?: boolean
//
//
// }


export function IncrementButton() {
    // const {onClick, disabled} = props;

    return (

            <div className={"btn"}>

                <button className={"btn1"}
                >Inc
                </button>
                <button className={"btn1"}
                >Reset
                </button>
                    {/*<button className={"btn2"} onClick={onClick} >Set</button>*/}
            </div>
    )
};

export default IncrementButton