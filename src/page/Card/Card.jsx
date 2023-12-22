import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { addToCart } from '../../redux/actions'
import { ContainerSide,Category,CoverButton,ButtonBuy,Description, DescriptionText, Price, Container,Left, LeftImg ,Right, Title,  } from './CardStyled'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Card = () => {

  
const dispatch = useDispatch()
    const {id} = useParams()
    const [product, setProduct] = useState([])



    const handleAddToCart = () => {
        dispatch(addToCart(product));
        toast("To card")
    }

    useEffect(()=> {
        const getProduct = async () => {
            
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json())
        }
        getProduct()
    })

    const {card} = useSelector((state) => state.data)

    const {totalQuantity, totalPrice} = useSelector((state) => state.data)

    console.log(card, '111111111')
    console.log(product)
  return (
    <Container>
      <ContainerSide>
      <Left>
      <LeftImg src={product.image}/>
      </Left>

      <Right>
     <Title>{product.title}</Title> 
     <Category>Category: {product.category}</Category>
    
      <Price>Price ${product.price}</Price>
      <Description>
Description
<DescriptionText>{product.description}</DescriptionText>
      </Description>
<CoverButton>
<ButtonBuy onClick={handleAddToCart}>To cart</ButtonBuy>
<ButtonBuy onClick={handleAddToCart}> <NavLink to='/cart'>Buy in 1 click</NavLink></ButtonBuy>
<ToastContainer position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"/>
</CoverButton>
      </Right>
      </ContainerSide>
    </Container>
  )
}

export default Card
