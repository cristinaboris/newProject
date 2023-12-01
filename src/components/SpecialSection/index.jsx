
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import * as types from '../../redux/actionTypes'
import { useEffect } from "react";
import SpecialElement from "./SpecialElement";
import {TitleSpecialContainer, TitleSpecial,Container,ContainerItem,} from './SpecialSectioStyled'
import SpecialSectionTwo from "../../components/SpecialSection/SpecialSectionTwo";

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
            <SpecialSectionTwo item={item}/>
            
          ))
          
        }</ContainerItem>
      
    </Container>
  )
}

export default SpecialSection
