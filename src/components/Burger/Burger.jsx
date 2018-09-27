import React from 'react'

import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = ({ ingredients }) => {
    let transformedIngredients = Object
        .keys(ingredients)
        .map(transformedIngredientKey => {
            return [...Array(ingredients[transformedIngredientKey])].map((_, index) => {
                return <BurgerIngredient
                    key={transformedIngredientKey + index}
                    type={transformedIngredientKey} />
            })
        })
        .reduce((prevValue, currValue) => {
            return prevValue.concat(currValue)
        }, [])

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Start adding ingredients, please!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" /> {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger