import React, {useState} from 'react'
import Header from '../components/loan/Header';
import Loans from '../components/loan/Loans';
import AddLoan from '../components/loan/AddLoan';

export const LoansView = () =>{
    const [showAddForm, setshowAddForm] = useState(false);
  
    //Deletes loan
    const deleteLoan=(id)=>{
      setLoans(loans.filter((loan)=>loan.id!==id))
  
    };
  
    //Actives paid
    const togglePaid=(id)=>{
      setLoans(loans.map((loan)=> loan.id===id? {...loan,paid: !loan.paid}:loan));
    }
  
    // saves loan to list
    const addLoan=(loan)=>{
        const id=Math.floor(Math.random()*10000)+1;
        const newLoan={id,...loan};
        setLoans([...loans, newLoan])
  
    };
  
    const [loans,setLoans]= useState([
      {
          id: 1,
          text: "Pizza",
          day: "8 march",
          paid: true,
      },
      {
          id: 2,
          text: "Cinema",
          day: "10 march",
          paid: true,
      },
      {
          id: 3,
          text: "Coffe",
          day: "9 march",
          paid: false,
      },
  ]) 
  
    return (
      <div className="container">
         <Header showAddForm={showAddForm} onAdd={()=>setshowAddForm(!showAddForm)}
          />
         {showAddForm && <AddLoan onAdd={addLoan}/>} 
         {loans.length>0 ? <Loans onToggle={togglePaid} onDelete={deleteLoan} loans={loans}/>: "List is empety"}
      </div>
    );
  }