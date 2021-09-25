import React from 'react'
import Loan from './Loan'

const Loans = ({loans,onDelete,onToggle}) => {
    return (<>
        {loans.map((loan) => (
            <Loan onToggle={onToggle} onDelete={onDelete} key={loan.id} loan={loan}/>
        ))}
    </>
    );

};

export default Loans;