import React, { useReducer } from 'react'
import "./Counter2.css";

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
            <div className="Text">Counter 1 </div>
            <div className="Text">{count.firstCounter} </div>
            <div className="Text">Counter 2</div>
            <div className="Text">{count.secondCounter} </div>
            <div className="ViewButton">
                <button className="Button" onClick={() => dispatch({ type: 'decrement', value: 5 })}>
                    Kurang -5
                </button>
                <button className="Button" onClick={() => dispatch({ type: 'decrement', value: 1 })}>
                    Kurang -1
                </button>
                <button className="Button" onClick={() => dispatch({ type: 'increment', value: 1 })}>
                    Tambah +1
                </button>
                <button className="Button" onClick={() => dispatch({ type: 'increment', value: 5 })}>
                    Tambah +5
                </button>
            </div>
            <div className="ViewButton">
                <button className="Button" onClick={() => dispatch({ type: 'decrement2', value: 1 })}>
                    Kurang Counter 2
                    </button>
                <button className="Button" onClick={() => dispatch({ type: 'increment2', value: 1 })}>
                    Tambah Counter 2
                    </button>
            </div>
            <div>
                <br />
                <button className="Button" onClick={() => dispatch({ type: 'reset' })}>
                    Reset All
                </button>
            </div>
        </div>
    )

}

export default Counter2