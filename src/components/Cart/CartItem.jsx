import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import {removeCart, quanityCart, decreaseQuantity} from '../../redux/actions'
import { Left, Right, Center, Container, ImageRight, Cancel } from './CartStyled'
import DialogWindow from './DialogWindow'

const CartItem = ({item}) => {

 const dispatch = useDispatch()

const removeItem = (productId)=> {
    dispatch(removeCart(productId))
}


const [dialog,setDialog] = useState({
  isLoading: false
})




  return (
    <Container key={item.id}>
    <Left>
<ImageRight src={item.image}/>
    </Left>
    <Right>
   <h3>{item.title}</h3> 
 <h4>Price: {item.price}</h4>
<button onClick={() => quanityCart(item.id)}>+</button>
<button onClick={() => decreaseQuantity(item.id)}>-</button>
<button>{item.length}</button>
    </Right>
    <Center><Cancel onClick={()=> removeItem(item.id)}>X</Cancel></Center>
    
   {
    dialog.isLoading && <DialogWindow />
   }
   
    </Container>
  )
}

export default CartItem
