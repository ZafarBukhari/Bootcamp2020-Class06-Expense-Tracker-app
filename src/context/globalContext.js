import React, { createContext, useReducer } from 'react';
import AppReducer from './appReducer';

// initial state
const initialState = {
    transactions: []
}


// create context
export const GlobalContext = createContext(initialState);


// create provider component
export const GlobalProvider = ({ children })=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTrans(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTrans(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTrans,
        addTrans
    }}>
        { children }
    </GlobalContext.Provider>
    )    
}