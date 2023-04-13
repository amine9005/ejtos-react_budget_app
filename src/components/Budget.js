import React ,{useContext} from "react";
import {AppContext} from '../context/AppContext';



const Budget = () => {

    const {budget , currency , dispatch,remaining} =  useContext(AppContext);
    const maxBudget = 20000;

    const setBudget = (value) =>{
        
        if (value > maxBudget){
            alert("the budget connot exceed  "+currency+" 20000  ")
            return;
        }
        if (remaining === 0){
            alert("You connot reduce the budget lower than spending ")
            return;
        }

        dispatch ({
            type:"SET_BUDGET",
            payload:value,
        })
    }

    return (
        <div className="alert alert-secondary">
            <span>Budget: {currency}
                <input type="number" value={budget} step={10} 
                    onChange={(event)=> setBudget(event.target.value)}>
                </input>
            </span>
        </div>
    );
}

export default Budget;