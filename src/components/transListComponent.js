import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalContext';
import { TransComponent } from './transComponent';

export const TransListComponent = () => {

    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (<TransComponent key={transaction.id} transaction = {transaction} />))}
                
            </ul>
        </>
    )
}
