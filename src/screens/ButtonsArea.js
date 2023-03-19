import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

// Components
import Button from '../components/Button';

const ButtonsArea = (props) => {
    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    const [operation, setOperation] = useState("")

    const handleOperation = (op) => {
        if (operation == "") {
            setOperation(op)
            props.setInput(`${num1} ${op} ${num2}`)
        }
    }

    const handlePress = (val) => {
        if (operation == "") {
            setNum1(num1 + val)
            props.setInput(`${num1 + val} ${operation} ${num2}`)
        } else {
            setNum2(num2 + val)
            props.setInput(`${num1} ${operation} ${num2 + val}`)
        }
    }

    const calculate = () => {
        switch (operation) {
            case "+":
                const plusResult = Number(num1) + Number(num2)
                props.setOutput(String(plusResult))
                break;
            case "-":
                const minResult = Number(num1) - Number(num2)
                props.setOutput(String(minResult))
                break;
            case "x":
                const crossResult = Number(num1) * Number(num2)
                props.setOutput(String(crossResult))
                break;
            case "÷":
                const divResult = Number(num1) / Number(num2)
                props.setOutput(String(divResult))
                break;
            default:
                alert("error")
        }
    }

    const resetAll = () => {
        props.setInput("")
        props.setOutput("")
        setNum1("")
        setNum2("")
        setOperation("")
    }

    return <View style={Style.container}>
        <Button text="C" color="#646EE8" onPress={() => resetAll()} />
        <Button text="+/-" color="#646EE8" />
        <Button text="%" color="#646EE8" />
        <Button text="÷" color="#E68383" onPress={() => handleOperation("÷")} />

        <Button text="7" color="#A0A0A0" onPress={() => handlePress("7")} />
        <Button text="8" color="#A0A0A0" onPress={() => handlePress("8")} />
        <Button text="9" color="#A0A0A0" onPress={() => handlePress("9")} />
        <Button text="X" color="#E68383" onPress={() => handleOperation("x")} />

        <Button text="4" color="#A0A0A0" onPress={() => handlePress("4")} />
        <Button text="5" color="#A0A0A0" onPress={() => handlePress("5")} />
        <Button text="6" color="#A0A0A0" onPress={() => handlePress("6")} />
        <Button text="-" color="#E68383" onPress={() => handleOperation("-")} />

        <Button text="1" color="#A0A0A0" onPress={() => handlePress("1")} />
        <Button text="2" color="#A0A0A0" onPress={() => handlePress("2")} />
        <Button text="3" color="#A0A0A0" onPress={() => handlePress("3")} />
        <Button text="+" color="#E68383" onPress={() => handleOperation("+")} />

        <Button text="0" color="#A0A0A0" isZero onPress={() => handleOperation("0")} />

        <Button text="." color="#A0A0A0" />
        <Button text="=" color="#E68383" onPress={() => calculate()} />
    </View>
}

const Style = StyleSheet.create({
    container: {
        flex: 2,

        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        alignContent: 'space-between',

    }

})

export default ButtonsArea;