import React from 'react'
import styled from "styled-components";
import one from '../../assets/img.png'
import two from '../../assets/img (1).png'
import three from '../../assets/img (2).png'
import four from '../../assets/img (3).png'
import {ContainerForTitle,TitleItem,TextItem,ImageItem,ContainerItem,ContainerItemsChosee, Container, TitleBold, TextChoose,} from './ChooseSectionStyled'


const ChooseSection = () => {
  return (
<Container>
    <ContainerForTitle>
        <TitleBold>Why Choose Us</TitleBold>
        <TextChoose>The main reason is because our competitors have disgusting sites, but we can' t write that here,  so the text here will be different</TextChoose>
    </ContainerForTitle>
    
    <ContainerItemsChosee>
<ContainerItem>
<ImageItem src={one}/>
<TitleItem>Payment methods</TitleItem>
<TextItem>We have a lot of them,  from cryptocurrencies to barter for potatoes</TextItem>
</ContainerItem>

<ContainerItem>
<ImageItem src={two}/>
<TitleItem>Simple search process</TitleItem>
<TextItem>We checked it out, even the kid did it, but it was my mom's friend's son</TextItem>
</ContainerItem>

<ContainerItem>
<ImageItem src={three}/>
<TitleItem>24/7 Support</TitleItem>
<TextItem>Is there something you don't understand? Feel free to call us. Phone number in the footer</TextItem>
</ContainerItem>

<ContainerItem>
<ImageItem src={four}/>
<TitleItem>24/7 Support</TitleItem>
<TextItem>Fantasy is over,  there will be something  really convincing here</TextItem>
</ContainerItem>
    </ContainerItemsChosee>
</Container>
  )
}

export default ChooseSection


