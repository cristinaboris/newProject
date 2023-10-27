import React from 'react'
import styled from "styled-components";
import one from '../../assets/img.png'
import two from '../../assets/img (1).png'
import three from '../../assets/img (2).png'
import four from '../../assets/img (3).png'



const Container = styled.div`
width: 100wh;
height: 100%;
margin-top: 150px;
background: #F7F7F7;

`

const ContainerForTitle = styled.div`
    display: flex;
    margin: 0 auto;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding-top: 10%;
    flex-direction: column;
    width: 500px;
    
`
const TitleBold = styled.h1`
    
`
const TextChoose = styled.p`
    color: gray;
    letter-spacing: 1px;
    text-align: center;
    line-height: 150%;
` 
const ContainerItemsChosee = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 40px;
`
const ContainerItem = styled.div`
    width: 250px;
    height: 250px;
    

`

const ImageItem = styled.img`

`

const TitleItem = styled.h3`
padding-top: 3%;
`

const TextItem = styled.p`
padding-top: 3%;
letter-spacing: 0.1rem;
`

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


