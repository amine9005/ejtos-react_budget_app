import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './ExpenseItem.css';
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FaTimesCircle,FaPlusCircle,FaMinusCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch,currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td>
                <FaPlusCircle onClick={event=> increaseAllocation(props.name)} icon={faCirclePlus} className='addBtn'/>
        </td>
        <td>
                <FaMinusCircle onClick={event=> decreaseAllocation(props.name)} icon={faCircleMinus} className='minBtn'/>
        </td>
        <td><FaTimesCircle className='delBtn' onClick={event => handleDeleteExpense()}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;