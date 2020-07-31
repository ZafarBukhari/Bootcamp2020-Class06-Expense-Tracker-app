import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/globalContext';

export const TransComponent = ({ transaction }) => {

    const { deleteTrans } = useContext(GlobalContext);

    const { transactions } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
            <button onClick={()=> deleteTrans(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}
