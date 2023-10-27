
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import where from '../../assets/icon2.png'
import where2 from '../../assets/icon (1).png'
import Button from '../../assets/button.png'
import filter from '../../assets/icon4.png'
import { useSelector } from 'react-redux';
import SpecialSectionTwo from "../../components/SpecialSection/SpecialSectionTwo";

const Container = styled.div`
width: 100%;
min-height: 100vh;
height: 100%;
`
const MainTitle = styled.div`
    text-align: center;
    padding: 50px 0;
`
const ContainerFinder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const ContainerDeals =styled.div`
width: 85%;
margin: 0 auto;
margin-top: 40px;
    
`
const ContainerFilterIcon = styled.div`
display: flex;
justify-content: space-between;
`

const LeftButton = styled.a`
    color: #EE685F;
    cursor: pointer;
    font-size: 18px;
    border-radius: 10px;
    padding: 8px 10px;
    border: 2px solid #EE685F;
`
const FilterRight = styled.div`
  display: flex;  
  gap: 20px;
  cursor: pointer;
`
const FilterRightElementIconContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
`
const Pfilter = styled.p`
    color: #EE685F
`

const FilterImg = styled.img`
    width: 25px;
    height: 25px;
`
const SectionBlock = styled.div`
  display: flex;
  width: 570px;
  height: 70px;
  background: white;
  border: 1px solid grey;
  border-radius: 45px;


 
`
const WhereLeft = styled.div`
display: flex;
width: 50%;
  gap: 10px;
  padding: 10px;
  margin: 10px;
  flex-direction: row;
  text-align:left;
  border-right: 1px solid grey;
  
`

const ImageWhere = styled.img`
  width: 30px;
  height: 30px;
`

const TextWhere = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const WhereTextSection = styled.p`
  color: black;
` 
const WhereSectionGray = styled.p`
  
color: gray;
`
const WhereRight = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  gap: 10px;
  padding: 10px;
  margin: 10px;
  flex-direction: row;
  text-align:left;
 
`

const ButtonImg = styled.img`
  cursor: pointer;
`
const ButtonDiv = styled.div`
  
`
const ContainerWhen = styled.div`
  display: flex;
  gap: 15px;
`
const SecondPartRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    gap: 10px;
  
`
const RightSort = styled.p`
    
`
const RightSortRed = styled.p`
color: #EE685F;
`

const ContainerItem =styled.div`
display: flex;
gap: 25px;
background: white;
border: none;
flex-wrap: wrap;
justify-content: center;
`

const ContainerForItems = styled.div`
`
const Deals = () => {
   
 const {items} = useSelector((state) => state.data)   
  
    return (
      <Container>
       <MainTitle><h1>Last Minute Deals</h1></MainTitle>
       <ContainerFinder>
       <SectionBlock>
<WhereLeft>
  <ImageWhere src={where}/>
<TextWhere>
  <WhereTextSection>
  Where
  </WhereTextSection>
<WhereSectionGray>Search Destination</WhereSectionGray>
  </TextWhere>
</WhereLeft>

<WhereRight>
 <ContainerWhen>

<ImageWhere src={where2}/>
<TextWhere>
  <WhereTextSection>
  When
  </WhereTextSection>
<WhereSectionGray>Select Date</WhereSectionGray>
  </TextWhere></ContainerWhen>
  <ButtonDiv>
<ButtonImg src={Button}/> </ButtonDiv>
</WhereRight>

</SectionBlock>
</ContainerFinder>


<ContainerDeals>
<ContainerFilterIcon>
<LeftButton>Show on map shop</LeftButton>
<FilterRight>

<FilterRightElementIconContainer>
<FilterImg src={filter}/>
<Pfilter>Filter</Pfilter>
</FilterRightElementIconContainer>
 <SecondPartRight>
 <RightSort>Sord by
 </RightSort>
 <RightSortRed>Relevance></RightSortRed>
 </SecondPartRight>
 </FilterRight>
 </ContainerFilterIcon>

 <ContainerItem>
        {
          items.map((item,i) => (
            <SpecialSectionTwo item={item}/>
            
          ))
          
        }</ContainerItem>

       






</ContainerDeals>
      </Container>
    );
  }

export default Deals
