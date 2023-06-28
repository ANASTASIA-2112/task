import React, {ChangeEvent, useEffect, useState} from 'react';


export type ContType ={

    onclick?:(event: ChangeEvent)=>void
    handleMaxValueChange: (event: ChangeEvent<HTMLInputElement>) => void
    handleStartValueChange: (event: ChangeEvent<HTMLInputElement>) => void

}
//
// export type MaxValue={
//     count:number
//     maxValue:number
//     startValue:number
//     disabled:boolean
//     incorrectValue:boolean
//
// }

export const NewMaxValue = (props:ContType ) => {

    return (


            <div className={"Counter2"}>
                <div className={"Max"}>
                    Max value:{" "}
                    <input
                        className={"max"}
                        type="number"
                        // value={props.maxValue}
                        onChange={props.handleMaxValueChange}
                        // style={{borderColor: incorrectValue ? "red" : "inherit"}}
                    />

                    <div className={"Min"}>
                        Start value:{" "}
                        <input
                            className={"start"}
                            type="number"
                            // value={props.startValue}
                            onChange={props.handleStartValueChange}
                            // style={{borderColor: incorrectValue ? "red" : "inherit"}}
                        />


                    </div>
                </div>
            </div>
            //     </div>
        // </div>


    );
}


export default NewMaxValue;