import React from 'react'
import styled from "styled-components";
import banner from '../../assets/logo.png';
import where from '../../assets/icon2.png'
import where2 from '../../assets/icon (1).png'
import Button from '../../assets/button.png'
import {Container,WhereRight,ContainerWhen,BannerImg,BannerText,MainText,ButtonDiv,LittleText, WhereSectionGray,SectionBlock, WhereLeft,ImageWhere,TextWhere, WhereTextSection,ButtonImg} from './BannerStyled'



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
