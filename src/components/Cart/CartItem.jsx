import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import {removeCart} from '../../redux/actions'
import { Left, Right, Center, Container, ImageRight, Cancel } from './CartStyled'
import DialogWindow from './DialogWindow'

const CartItem = ({item}) => {

 const dispatch = useDispatch()

const removeItem = (productId)=> {
    dispatch(removeCart(productId))
}




  return (
    <Container key={item.id}>
    <Left>
<ImageRight src={item.image}/>
    </Left>
    <Right>
   <h3>{item.title}</h3> 
 <h4>Price: {item.price}</h4>

    </Right>
    <Center><Cancel onClick={()=> removeItem(item.id)}>X</Cancel></Center>
    <DialogWindow />
    </Container>
  )
}

export default CartItem
