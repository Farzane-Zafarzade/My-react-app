import React, { useState, useEffect } from 'react'
import Header from '../components/loan/Header';
import Loans from '../components/loan/Loans';
import AddLoan from '../components/loan/AddLoan';
import { useLocation } from 'react-router-dom';

export const LoansView = () => {
  const location = useLocation();
  
  const [showAddForm, setshowAddForm] = useState(false);

  //Deletes loan
  const deleteLoan = (id) => {
    setLoans(loans.filter((loan) => loan.id !== id))

  };

  //Actives paid
  const togglePaid = (id) => {
    setLoans(loans.map((loan) => loan.id === id ? { ...loan, paid: !loan.paid } : loan));
  }

  // saves loan to list
  const addLoan = (loan) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newLoan = { id, ...loan };
    setLoans([...loans, newLoan])

  };

  const [loans, setLoans] = useState([
    {
      id: 1,
      text: "David",
      describtion: "(-100Kr) 8 March - Pizza",
      paid: true,
    },
    {
      id: 2,
      text: "Sara",
      describtion: "(-150Kr) 2 March - Shopping",
      paid: false,
    },
    {
      id: 3,
      text: "Leeda",
      describtion: "(60Kr) 21 May - Coffee",
      paid: true,
    },
  ])

  return (
    <div className="container">
      <h2> {location.state.param} </h2>
      <Header showAddForm={showAddForm} onAdd={() => setshowAddForm(!showAddForm)}
      />
      {showAddForm && <AddLoan onAdd={addLoan} />}
      {loans.length > 0 ? <Loans onToggle={togglePaid} onDelete={deleteLoan} loans={loans} /> : "List is empety"}
    </div>
  );
}