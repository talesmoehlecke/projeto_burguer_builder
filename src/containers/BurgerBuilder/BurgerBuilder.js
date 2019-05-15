import React, {  Component } from 'react';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component{
    render(){
        return(
            <>
            <div>
                <Burger />
            </div>
            <div>
                Ingredients selector
            </div>
            </>
        )
    }
}

export default BurgerBuilder;