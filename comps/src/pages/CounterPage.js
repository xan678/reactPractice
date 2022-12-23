import produce from 'immer';
import { useReducer, useEffect } from "react";
import Button from "../components/Button";
import Panel from '../components/Panel';

const reducer = (state, action) => {

    if(action.type === 'increment') {
        state.count = state.count + 1;
        return;
    }
    else if(action.type === 'decrement') {
        state.count = state.count -1;
        return;
    }
    else if(action.type === 'change-value-to-add') {
        state.valueToAdd = action.payload
        return;
    }

    else if(action.type === 'add-value'){
        state.count = state.count + state.valueToAdd;
        state.valueToAdd = 0;
        return;
    };
    
}

const CounterPage = ({initialCount}) => {
    // const [count, setCount] = useState(initialState);
    // const [valueToAdd, setValueToAdd] = useState(0)

    const [state, dispatch] = useReducer(produce(reducer), {
        count:0,
        valueToAdd: 0
    });

    const handleClick = () => {
        dispatch({
            type: 'increment',
        });
    };

    const decrement = () => {
        //setCount(count-1);
        dispatch({
            type : "decrement"
        });
    };

    const handleChange = (event) => {
      const value = parseInt(event.target.value) || 0;
      //setValueToAdd(value);  
        dispatch({
            type : "change-value-to-add",
            payload : value,
        })
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        //setCount(count + valueToAdd); // + represents closely related states
        //setValueToAdd(0);
        dispatch({
            type : 'add-value'
        })
       
    }

    return <Panel className="m-3">
        <h1 className="text-lg">Count is {state.count}</h1> 
        <div className="flex flex-row">
        <Button onClick={handleClick}> 
            Increment
        </Button>
        <Button onClick={decrement}>
            Decrement
        </Button>
        </div>
        <form onSubmit={handleSubmit}>
            <label>Add a lot!</label>
            <input value={state.valueToAdd || ""} onChange = {handleChange} type = "number" className="p-1 m-3 bg-gray-50 border border -gray-300"/>
            <Button >Add it </Button>
        </form>
    </Panel>

}

export default CounterPage;