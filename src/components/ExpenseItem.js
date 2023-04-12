import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import './ExpenseItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';

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
                <FontAwesomeIcon onClick={event=> increaseAllocation(props.name)} icon={faCirclePlus} className='addBtn'/>
        </td>
        <td>
                <FontAwesomeIcon onClick={event=> decreaseAllocation(props.name)} icon={faCircleMinus} className='minBtn'/>
        </td>
        <td><TiDelete size='2.5em' onClick={event => handleDeleteExpense()}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;