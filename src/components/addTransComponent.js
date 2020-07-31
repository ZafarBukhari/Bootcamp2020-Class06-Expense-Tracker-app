import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/globalContext';

export const AddTransComponent = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTrans } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        if (Number(amount) === 0) {
            alert("Please enter correct value");
            return false;
        }

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTrans(newTransaction);

        setText('');
        setAmount(0)
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={ text } onChange={(e)=> setText(e.target.value)} placeholder="Enter text..." required/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                    (negative = expense, positive = income)</label>
                    <input type="number" value={ amount } onChange={(e)=> setAmount(e.target.value)} placeholder="Enter amount..." required/>
                </div>
                <button className="btn">ADD TRANSACTION</button>
            </form>
        </>
    )
}
