import React from 'react'
import { useDispatch } from 'react-redux'
import { quanityCart, decreaseQuantity} from '../../redux/actions'
import { Left, Right, Center, Container, ImageRight, Cancel } from './CartStyled'
import DialogWindow from './DialogWindow'
import { useState } from 'react'


const CartItem = ({item}) => {

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



  return (
    <Container key={item.id}>
    <Left>
<ImageRight src={item.image}/>
    </Left>
    <Right>
   <h3>{item.title}</h3> 
 <h4>Price: {item.price}</h4>
<button onClick={() => increse(item.id)}>-</button>
<button onClick={() => descrese(item.id)}>+</button>

<p>{item.price * item.quantity}</p>
<p>{item.quantity}</p>

    </Right>
   
    <Center><Cancel onClick={()=> setDialog({isLoading:true})}>X</Cancel></Center>

   {
    dialog.isLoading && <DialogWindow id={item.id} dialog={dialog} setDialog={setDialog}/>
   }
   
    </Container>
    
  )
  
}

export default CartItem
