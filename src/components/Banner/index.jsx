import React from 'react'
import styled from "styled-components";
import banner from '../../assets/logo.png';
import where from '../../assets/icon2.png'
import where2 from '../../assets/icon (1).png'
import Button from '../../assets/button.png'

const Container = styled.div`
  width: 95%;
  height: 80vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  `

const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 0;
  object-position: center;
`
const BannerText = styled.div`
  width: 380px;
  text-align: left;
  padding-top: 4%;
  padding-left: 4%;
  position: absolute;
  z-index: 0;
 
`
const MainText = styled.h1`
   font-size: 40px;
   text-shadow: 1px 3px 2px grey;

`
const LittleText = styled.p`
padding-top: 10px;
letter-spacing: 1px;
line-height: 1.2;
`
const SectionBlock = styled.div`
  display: flex;
  width: 570px;
  height: 70px;
  background: white;
  border: 1px solid grey;
  border-radius: 45px;
  position: absolute;
  bottom: 2px;
  bottom: 5%;
  left: 30%;
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

const Banner = () => {
  return (
<Container>
<BannerImg src={banner}/>
<BannerText>
<MainText>
Find an apartment for your vacation
</MainText>
<LittleText>
We have several thousand apartments  for every taste in every corner of the globe
</LittleText>
</BannerText>





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
</Container>
  )
}

export default Banner
