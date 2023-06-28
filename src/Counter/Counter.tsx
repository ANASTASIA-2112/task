//Создать компонент для счетчика с использованием всех вышеперечисленных компонентов и хуков состояний:
import React, {ChangeEvent, useEffect, useState} from "react";
import  IncrementButton from "./IncrementButton";
import CounterDisplay from "./CounterDisplay";
import DecrementButton from "./DecrementButton";






//
// export type CounterType={
//     count: number;
//     maxValue: number;
//     startValue: number;
//     disabled?: boolean;
//     incorrectValue: boolean;
// };


function Counter() {
    const [count, setCount] = useState<number>(0);
     const [maxValue, setMaxValue] = useState<number>(0);
     const [startValue, setStartValue] = useState<number>(0);
    const [disabled, setDisabled] = useState<boolean>(false);
    const [incorrectValue, setIncorrectValue] = useState<boolean>(false);

    useEffect(() => {
        const storedMaxValue = localStorage.getItem("maxValue");
        const storedStartValue = localStorage.getItem("startValue");
        if (storedMaxValue && storedStartValue) {
            setMaxValue(parseInt(storedMaxValue));
            setStartValue(parseInt(storedStartValue));
        } else {
            setMaxValue(0);
            setStartValue(0);
        }
    }, []);

    useEffect(() => {
        if (count === maxValue) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [count, maxValue]);

  // function handleIncrement() {
  //       setCount((prevState) => prevState + 1);
  //   }
  //
  //   function handleReset() {
  //       setCount(startValue);
  //   }

    function handleSet() {
        if (maxValue <= 0 || startValue >= maxValue) {
            setDisabled(true);
            setIncorrectValue(true);
            localStorage.removeItem("maxValue");
            localStorage.removeItem("startValue");
        } else {
            setDisabled(false);
            setIncorrectValue(false);
            setCount(startValue);
            localStorage.setItem("maxValue", "maxValue");
            localStorage.setItem("startValue", "startValue");
        }
    }

    function handleMaxValueChange(event: ChangeEvent<HTMLInputElement>) {
        const value = parseInt(event.target.value);
        setMaxValue(value);
        if (value <= 0 || value <= startValue) {
            setDisabled(true);
            setIncorrectValue(true);
        } else {
            setDisabled(false);
            setIncorrectValue(false);
        }
    }

    function handleStartValueChange(event: ChangeEvent<HTMLInputElement>) {
        const value = parseInt(event.target.value);
        setStartValue(value);
        if (value < 0 || value >= maxValue) {
            setDisabled(true);
            setIncorrectValue(true);
        } else {
            setDisabled(false);
            setIncorrectValue(false);
        }
    }

    return (
        <div className={"Counter"}>
            <h1 className={count === maxValue ? "active" : " disabled"}>{count} {count === maxValue &&
                <span style={{color: "red"}}> Max Value Reached</span>}</h1>
            {count === maxValue && <span style={{color: "blue"}}> enter values and press"set" </span>}
            {/*<div className={"btn"}>*/}
            {/*    <button className={"btn"} onClick={handleIncrement} disabled={count === maxValue}*/}
            {/*    >Inc*/}
            {/*    </button>*/}

            {/*    <button onClick={handleReset}*/}
            {/*    >Reset*/}
            {/*    </button>*/}

                <div className={"Counter2"}>
                    <div className={"Max"}>
                        Max value:{" "}
                        <input
                            className={"max"}
                            type="number"
                            value={maxValue}
                            onChange={handleMaxValueChange}
                            style={{borderColor: incorrectValue ? "red" : "inherit"}}
                        />
                        {incorrectValue && count}
                        <div className={"Min"}>
                            Start value:{" "}
                            <input
                                className={"start"}
                                type="number"
                                value={startValue}
                                onChange={handleStartValueChange}
                                style={{borderColor: incorrectValue ? "red" : "inherit"}}
                            />
                            {incorrectValue && count}
                            {/*<div className={"btn"}>*/}
                            {/*    <button onClick={handleSet} disabled={count === startValue}>Set</button>*/}
                            {/*</div>*/}
                            <CounterDisplay />
                            <DecrementButton />
                            <IncrementButton  />
                        </div>
                    </div>
                </div>
        //     </div>
        // </div>


    );
}

export default Counter;
