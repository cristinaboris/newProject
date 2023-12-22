import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { quanityCart, decreaseQuantity} from '../../redux/actions'
import { Left, Right, Center, Container, ImageRight, Cancel } from './CartStyled'
import DialogWindow from './DialogWindow'
import { useState } from 'react'
import { connect } from 'react-redux';

const CartItem = ({item, totalPrice, totalQuantity}) => {

 const dispatch = useDispatch()



const increse = (id) => {
  dispatch(decreaseQuantity(id))
}

const descrese = (id) => {
  dispatch(quanityCart(id))
}
const [dialog,setDialog] = useState({
  isLoading: false
})


//emoveItem(item.id) id!!!

  return (
    <Container key={item.id}>
    <Left>
<ImageRight src={item.image}/>
    </Left>
    <Right>
   <h3>{item.title}</h3> 
 <h4>Price: {item.price}</h4>
<button onClick={() => quanityCart(item.id)}>+</button>
<button onClick={() => descrese(item.id)}>-</button>

<p>{totalPrice}</p>
<p>{totalQuantity}</p>
<button>{item.length}</button>
    </Right>
   
    <Center><Cancel onClick={()=> setDialog({isLoading:true})}>X</Cancel></Center>

   {
    dialog.isLoading && <DialogWindow id={item.id} dialog={dialog} setDialog={setDialog}/>
   }
   
    </Container>
    
  )
  
}

export default CartItem
