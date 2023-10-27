
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import * as types from '../../redux/actionTypes'
import { useEffect } from "react";
import SpecialElement from "./SpecialElement";


const Container = styled.div`
margin-top: 100px;
  width: 100%;
  height: 100%;
`

const TitleSpecialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`
const TitleSpecial = styled.h1`
`
const ButtonNews = styled.button`
  
`
const Pad = styled.p`
  color: black;
`
const ContainerItem =styled.div`
display: flex;
gap: 25px;
background: white;
border: none;
flex-wrap: wrap;
justify-content: center;
`
const SpecialSection = () => {
const dispatch = useDispatch()



useEffect(() => {
  dispatch({type: types.FETCH_ITEMS_START})
},[])



const {items} = useSelector((state) => state.data)
console.log(items)



const slicing  = items.slice(0,3)
console.log(slicing)
  return (
    <Container>
      <TitleSpecialContainer>
        <TitleSpecial>Special offers</TitleSpecial>
      </TitleSpecialContainer>
    
      <ContainerItem>
        {
          slicing.map((item,i) => (
            <SpecialElement item={item}/>
            
          ))
          
        }</ContainerItem>
      
    </Container>
  )
}

export default SpecialSection
