import React, { useReducer } from 'react'

const initState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initState
        default:
            return state
    }
}

function Counter2() {
    const [count, dispatch] = useReducer(reducer, initState)

    return (
        <div className="Main">
            <div className="Text">Counter 1 - {count.firstCounter} </div>
            <div className="Text">Counter 2 - {count.secondCounter} </div>
            <div className="ViewButton">
                <div className="ViewButton2">
                    <button className="Button" onClick={() => dispatch({ type: 'decrement', value: 1 })}>
                        C1 -1
                    </button>
                </div>
                <div className="ViewButton1">
                    <button className="Button" onClick={() => dispatch({ type: 'increment', value: 1 })}>
                        C1 +1
                    </button>
                </div>
            </div>
            <div className="ViewButton">
                <div className="ViewButton2">
                    <button className="Button" onClick={() => dispatch({ type: 'decrement', value: 5 })}>
                        C1 -5
                    </button>
                </div>
                <div className="ViewButton1">
                    <button className="Button" onClick={() => dispatch({ type: 'increment', value: 5 })}>
                        C1 +5
                    </button>
                </div>
            </div>
            <div className="ViewButton">
                <div className="ViewButton2">
                    <button className="Button" onClick={() => dispatch({ type: 'decrement2', value: 1 })}>
                        C2 -1
                    </button>
                </div>
                <div className="ViewButton1">
                    <button className="Button" onClick={() => dispatch({ type: 'increment2', value: 1 })}>
                        C2 +1
                    </button>
                </div>
            </div>
            <div>
                <button className="Button" onClick={() => dispatch({ type: 'reset' })}>
                    Reset All
                </button>
            </div>
        </div>
    )

}

export default Counter2