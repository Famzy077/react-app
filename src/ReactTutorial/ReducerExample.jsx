import { useReducer } from "react"
const ReducerExample = () => {
    const myValue = 10;
    const arrayValue = ['Apple', 'Orange', 'Mango'];
    const [value, dispatch] = useReducer((state, action) => {
        switch (action) {
            case 'add':
                return [ ...state, 'Pawpaw', 'Strawberry']
            case 'remove':
                if(state.length == 0) {
                    return state
                }
                return [...state.slice(0, state.length - 1)]
            case 'reset':
                return []

        }
    }, arrayValue)
  
    return <div>
        <p>Reducer Example</p>
        { value.map((val, valKey) => { 
return <h1 key={valKey}>{ val }</h1>
        }) }

        {/* <button onClick={() => dispatch('add')}>+</button> */}
        <button onClick={() => dispatch('remove')}>remove Array</button>
        <button onClick={() => dispatch('reset')}>Remove All Array</button>

        <button onClick={() => dispatch('add')}>Add Array</button>
    </div>
}
export default ReducerExample