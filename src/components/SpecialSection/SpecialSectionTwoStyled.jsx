import styled from "styled-components";

export const Container =styled.div`
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
export const ImageElement = styled.img`
margin-top: 2%;
display: flex;
justify-content: center;
align-items: center;
  width: 330px;
  height:220px;
  border: 1px solid gray;
  border-radius: 10%;
  
`
export const TitleElement = styled.h3`
  text-align: left;
  padding-top: 5px;
  font-size: 17px;
  letter-spacing: 0.1rem;
  height: 10%;
  cursor: pointer;
`
export const PElement = styled.p`
  text-align: left;
  color: gray;
  height: 5%;
  letter-spacing: 0.1rem;
`
export const ContainerRatingPrice = styled.div`
 height: 10%;
  display: flex;
  padding-top: 15%;
  flex-direction: column;
`

export const Price = styled.p`
height: 10%;
display: flex;
  font-size: 30px;
  color: #2F80ED;
`
export const Piece = styled.p`
  font-size: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  
`
export const Rating = styled.p`
 height: 5%;
  padding-top: 3%;
  text-align: left;
  color: #56CCF2;
  
`
export const ContainerForItems = styled.div`
  padding-left: 2%;
`
export const ImageElementContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  bottom: -5px;
 
`

export const IconHeard = styled.img`
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
export const IconStar = styled.img`
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
