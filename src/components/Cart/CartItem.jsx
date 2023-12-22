import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { decreaseQuantity, quanityCart, removeCart } from '../../redux/actions'
import { Cancel, Center, Container, ImageRight, Left, Right } from './CartStyled'
import DialogWindow from './DialogWindow'

//TODO: remove totalPrice, totalQuantity

const CartItem = ({ item, totalPrice, totalQuantity }) => {
  const [isShowDialog, setDialog] = useState(false)
  const dispatch = useDispatch()

  const handleClickModal = (option) => {
    if (option) {
      dispatch(removeCart(item.id))
    }
    setDialog(false)
  }

  return (
    <Container key={ item.id }>
      <Left>
        <ImageRight src={ item.image }/>
      </Left>
      <Right>
        <h3>{ item.title }</h3>
        <h4>Price: { item.price }</h4>
        <button onClick={ () => dispatch(quanityCart(item.id)) }>+</button>
        <button onClick={ () => dispatch(decreaseQuantity(item.id)) }>-</button>
        <p>totalPrice: { item.price * item.quantity }</p>
        <p>Total quantity: { item.quantity }</p>
      </Right>
      <Center>
        <Cancel onClick={ () => setDialog(true) }>X</Cancel>
      </Center>
      { isShowDialog && <DialogWindow handleClick={ handleClickModal }/> }
    </Container>
  )
}

export default CartItem
