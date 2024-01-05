import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import CartItem from './CartItem'
import  {ContainerCart} from './CartStyled'



const Cart = () => {

  const {card} = useSelector((state) => state.data)



  return (
    <ContainerCart>
      { card.length ? 
      <div>
      {
        card.map((item,i) => (
          <CartItem key={i} item={item} />
        )) 
      }</div>
       : <h2>Empty Cart!</h2>}
    </ContainerCart>
  )
}

export default Cart
