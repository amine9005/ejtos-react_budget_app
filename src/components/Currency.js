import React, { useContext } from "react";
import './Currency.css'
import { AppContext } from "../context/AppContext";

const Currency = () => {

    const {dispatch} = useContext(AppContext);

    const handleCurrecnyChagne = (value) =>{
        
        dispatch({
            type:"CHG_CURRENCY",
            payload:value,
        });


    }

    
    return (

        <div className="alert currecny-select">Currency: 
            <select onChange={event => handleCurrecnyChagne(event.target.value) } 
            className="custom-select currecny-select" >
                <option  value="$"> $ dollar</option>
                <option selected value="£"> £ Pound</option>
                <option value="€"> € Euro</option>
                <option value="₹"> ₹ Ruppee</option>
            </select>
        </div>
    );
}

export default Currency;