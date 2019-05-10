import React from 'react';
import classes from './BurguerIngredient.module.css';

const burguerIngredient = (props) => {
    let ingredient = null;

    switch(props.type){
        case('bread-bottom'):
            ingredient = <div className={BreadBottom}></div>
    }
};

export default burguerIngredient;