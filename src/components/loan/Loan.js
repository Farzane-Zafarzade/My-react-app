import React from 'react'
import {FaTrash} from 'react-icons/fa'

const Loan = ({loan,onDelete,onToggle}) => {
    return (
        <div className={`loan ${loan.paid ? "paid":""}`}
         onDoubleClick={()=>onToggle(loan.id)}>
            <h3>{loan.text}<FaTrash onClick={()=>onDelete(loan.id)} 
            style={{color:"blue"}}/></h3>
            <p>{loan.describtion}<br/>({loan.paid?"paid":"Dubble click to change status to paid"})</p>
        </div>
    )
}

export default Loan
