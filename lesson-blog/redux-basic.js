
const redux = require('redux')

//redux.createStore is a function
const createStore = redux.createStore;

//initialize state 
const initialize = {
    count: 0
}




//reducer 
const rootReducer = (state = initialize, action ) => {
    
    if(action.type === 'INC_COUNTER')
    {
        return{
            ...state,
            //pass counter to = state.counter and + 1
            count: state.count + 1
        }
    }
    if(action.type === 'ADD_COUNTER')
    {
        return{
            ...state,
            //pass counter to = state.counter and + 1
            count: state.count + action.value
        }
    }
    
    
    return state;
}


//store

const store = createStore(rootReducer);


console.log(store.getState())


// subscribe is revoke whenever dispatch finished run
store.subscibe(() => 
{
    console.log('[subscription]', store.getState())
});

//dispatching
store.dispatch({ type: 'INC_COUNTER'});
store.dispatch({ type: 'ADD_COUNTER', value: 10});

//output { count: 0}
//output { count: 0}

console.log(store.getState());

//subscription

