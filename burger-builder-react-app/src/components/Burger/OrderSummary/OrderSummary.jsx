import React, { Component } from 'react'

import Aux from '../../../hoc/Auxiliary/Auxiliary'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    //this component hasn't to be a class
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(ingredientKey => {
                return (
                    <li key={ingredientKey}>
                        <span style={{ textTransform: 'capitalize' }}>
                            {ingredientKey}
                        </span>
                        : {this.props.ingredients[ingredientKey]}
                    </li>)
            })

        return (
            <Aux>
                <h3>Ordered Burger</h3>
                <p>Your Burger contains following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Total price: <strong>{this.props.price.toFixed(2)}$</strong></p>
                <p>Continue to checkout?</p>
                <Button buttonType={"Danger"} clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button buttonType={"Success"} clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        )
    }
}

export default OrderSummary