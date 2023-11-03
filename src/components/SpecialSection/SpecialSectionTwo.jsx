import React from 'react'
import styled from 'styled-components'
import star from '../../assets/Star 1.png'
import heard from '../../assets/heard.png'
import { Link } from 'react-router-dom'
import {Container,Price,Rating,ContainerRatingPrice,PElement,TitleElement,ImageElement,IconStar,IconHeard, ImageElementContainer, ContainerForItems,} from './SpecialSectionTwoStyled'



const SpecialSectionTwo = ({item}) => {
  return (
    <Link to={`/deals/${item.id}`}>
    <Container>
<ImageElementContainer>
        <ImageElement src={item.image} />
        
        <IconStar src={star}/>
        <IconHeard src={heard} />

        </ImageElementContainer>
<ContainerForItems>
        <TitleElement>{item.title}</TitleElement>
         <PElement>{item.category}</PElement>
         <ContainerRatingPrice>
         <Price>${item.price}/<Piece>1 piece</Piece></Price>
         <Rating>Rating: {item.rating.rate}</Rating>
         </ContainerRatingPrice>
         </ContainerForItems>
         </Container>
         </Link>
  )
}


//<p>{item.rating.rate}</p>
export default SpecialSectionTwo
