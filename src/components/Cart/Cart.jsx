import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import CartItem from './CartItem'


const Container = styled.div`
  padding-top: 30px;
  width: 40%;
  margin: 0 auto;
  min-height: 100vh;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const Cart = () => {

  const {card} = useSelector((state) => state.data)


  return (
    <Container>
      {
        card.map((item,i) => (
          <CartItem key={i} item={item}/>
        )) 
      }
    </Container>
  )
}

export default Cart
