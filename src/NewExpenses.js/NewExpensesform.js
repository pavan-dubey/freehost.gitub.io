import React,{useState} from "react";
import './NewExpensesform.css'

const NewExpenssesform = ()=> {
    const[EnteredTitle,ChangeclickTitle]=useState("")
    const[EnteredAmount,ChangeclickAmonut]=useState("")
    const[Entereddate,ChangeclickDate]=useState("")

const ChangeHandlertitle =(event)=>{
    console.log(event.target.value)

}
const ChangeHandleramount =()=>{}
const ChangeHandlerdate =()=>{}

    return(
        <form>
            <div className="new-expense-control">
                <div className="new-expense-controls">
                    <label>Title</label>
                    <input type="text" onChange={ChangeHandlertitle}/>
                </div>
                <div className="new-expense-controls">
                    <label>Amount</label>
                    <input type="number" min="0.50" onChange={ChangeHandleramount}/>
                </div>
                <div className="new-expense-controls">
                    <label>Date</label>
                    <input type="date" onChange={ChangeHandlerdate}/>
                </div>
                <div className="new-expense-controls">
                    
                    <button className="btn">Join Expense</button>
                </div>
        </div>
        </form>

    )
}
export default NewExpenssesform