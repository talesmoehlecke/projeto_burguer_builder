import React from 'react';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]} 
            </li>
        );
    });
    
    return(
        <>
            <h3>Your Order</h3>
            <p>Follow ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" /*clicked={}*/>CANCEL</Button>
            <Button btnType="Success" /*clicked={}*/>CONTINUE</Button>
        </>
    );
};

export default orderSummary;