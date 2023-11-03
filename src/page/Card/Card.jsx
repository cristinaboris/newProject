import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { addToCart } from '../../redux/actions'
import { ContainerSide,Category,CoverButton,ButtonBuy,Description, DescriptionText, Price, Container,Left, LeftImg ,Right, Title,  } from './CardStyled'



const Card = () => {
const dispatch = useDispatch()
    const {id} = useParams()
    const [product, setProduct] = useState([])



    const handleAddToCart = () => {
        dispatch(addToCart(product));
    }

    useEffect(()=> {
        const getProduct = async () => {
            
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json())
        }
        getProduct()
    })

    const {card} = useSelector((state) => state.data)
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
<ButtonBuy>Buy in 1 click</ButtonBuy>
</CoverButton>
      </Right>
      </ContainerSide>
    </Container>
  )
}

export default Card
