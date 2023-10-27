import React from 'react'
import styled from 'styled-components'
import star from '../../assets/Star 1.png'
import heard from '../../assets/heard.png'

const Container =styled.div`
border: 1px solid black;
max-width: 350px;
max-height: 420px;
width: 100%;
height: 420px;
margin-top: 40px;
&:hover{
  background: wheat
 }
`
const ImageElement = styled.img`
margin-top: 2%;
display: flex;
justify-content: center;
align-items: center;
  width: 330px;
  height:220px;
  border: 1px solid gray;
  border-radius: 10%;
  
`
const TitleElement = styled.h3`
  text-align: left;
  padding-top: 5px;
  font-size: 17px;
  letter-spacing: 0.1rem;
  height: 10%;
  cursor: pointer;
`
const PElement = styled.p`
  text-align: left;
  color: gray;
  height: 5%;
  letter-spacing: 0.1rem;
`
const ContainerRatingPrice = styled.div`
 height: 10%;
  display: flex;
  padding-top: 15%;
  flex-direction: column;
`

const Price = styled.p`
height: 10%;
display: flex;
  font-size: 30px;
  color: #2F80ED;
`
const Piece = styled.p`
  font-size: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  
`
const Rating = styled.p`
 height: 5%;
  padding-top: 3%;
  text-align: left;
  color: #56CCF2;
  
`
const ContainerForItems = styled.div`
  padding-left: 2%;
`
const ImageElementContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  bottom: -5px;
 
`

const IconHeard = styled.img`
display: flex;
position: absolute;
top: 20px;
right: 25px;
width: 20px;
height: 20px;
padding: 10px;
background: wheat;
border-radius: 50%;
cursor: pointer;
&:hover{
  background: white
 }
`
const IconStar = styled.img`
  display: flex;
position: absolute;
top: 20px;
left: 25px;
width: 20px;
height: 20px;
padding: 10px;
background: white;
border-radius: 50%;
cursor: pointer;
 &:hover{
  background: wheat
 }
`



const SpecialElement = ({item}) => {
  return (
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
  )
}


//<p>{item.rating.rate}</p>
export default SpecialElement
