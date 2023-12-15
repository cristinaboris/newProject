import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToCart } from '../../redux/actions'
import {
  ButtonBuy,
  Category,
  Container,
  ContainerSide,
  CoverButton,
  Description,
  DescriptionText,
  Left,
  LeftImg,
  Price,
  Right,
  Title,
} from './CardStyled'

const Card = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [product, setProduct] = useState([])

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast('To card')
  }

  useEffect(() => {
    const getProduct = async () => {
      const response = await (await fetch(`https://fakestoreapi.com/products/${ id }`)).json()
      setProduct(response)
    }
    getProduct()
  })

  return (
    <Container>
      <ContainerSide>
        <Left>
          <LeftImg src={ product.image }/>
        </Left>

        <Right>
          <Title>{ product.title }</Title>
          <Category>Category: { product.category }</Category>

          <Price>Price ${ product.price }</Price>
          <Description>
            Description
            <DescriptionText>{ product.description }</DescriptionText>
          </Description>
          <CoverButton>
            <ButtonBuy onClick={ handleAddToCart }>To cart</ButtonBuy>
            <ButtonBuy onClick={ handleAddToCart }> <NavLink to="/cart">Buy in 1 click</NavLink></ButtonBuy>
            <ToastContainer position="top-right"
                            autoClose={ 5000 }
                            hideProgressBar={ false }
                            newestOnTop={ false }
                            closeOnClick
                            rtl={ false }
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
