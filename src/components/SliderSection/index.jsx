import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import one from '../../assets/logo.png'
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

import people from '../../assets/Ellipse 6.png'
import peopletwo from '../../assets/Ellipse 6 (1).png'
import styled from 'styled-components';

const Container = styled.div`
margin-top: 100px;
width: 100%;
height: 100%;
padding-top: 0px;
`

const SliderDiv = styled.div`

display: flex;
justify-content: center;
gap: 10px;
flex-wrap: wrap;
`
const SliderContainerItem = styled.div`
    
`

const ContainerImg = styled.div`
padding-bottom: 10px;
text-align: center;
    
`
const ImageSlider = styled.img`
    
`
const Reviews = styled.h2`
text-align: center;
margin-bottom: 50px;
font-size: 30px;
`

const SliderText = styled.div`
width: 350px;
height: 150px;
text-align: left;
letter-spacing: 0.1rem;
line-height: 1.5rem;
`
const ComentAuth = styled.p`
text-align: left;
`
const DivButton = styled.div`
  display: flex;
  justify-content: center;
`

const ButtonSlider = styled.button`
    width: 275px;
    height: 50px;
  
    border-radius: 20px;
    background: #EE685F;
    border: none;
    color: white;
    letter-spacing: 0.2rem;
    cursor: pointer;
    &:hover{
        background: wheat;
    }
    
`
const SliderSection = () => {
  return (
    <Container>
         <Reviews>Reviews</Reviews>
         
      <Splide aria-label="My Favorite Images">
    
  <SplideSlide>

    <SliderDiv>
        
        <SliderContainerItem>
<ContainerImg>
<ImageSlider src={people}/>
</ContainerImg>
<SliderText>
I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.
</SliderText>
<ComentAuth>Jannike Borg, Publisher</ComentAuth>
</SliderContainerItem>

<SliderContainerItem>
<ContainerImg>
<ImageSlider src={people}/>
</ContainerImg>
<SliderText>
I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.
</SliderText>
<ComentAuth>Jannike Borg, Publisher</ComentAuth>
</SliderContainerItem>
<SliderContainerItem>
<ContainerImg>
<ImageSlider src={peopletwo}/>
</ContainerImg>
<SliderText>
I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.
</SliderText>
<ComentAuth>Jannike Borg, Publisher</ComentAuth>
</SliderContainerItem>
    </SliderDiv>

  </SplideSlide>

  <SplideSlide>
 
    <SliderDiv>
        
        <SliderContainerItem>
<ContainerImg>
<ImageSlider src={people}/>
</ContainerImg>
<SliderText>
I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.
</SliderText>
<ComentAuth>Jannike Borg, Publisher</ComentAuth>
</SliderContainerItem>

<SliderContainerItem>
<ContainerImg>
<ImageSlider src={people}/>
</ContainerImg>
<SliderText>
I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.
</SliderText>
<ComentAuth>Jannike Borg, Publisher</ComentAuth>
</SliderContainerItem>
<SliderContainerItem>
<ContainerImg>
<ImageSlider src={peopletwo}/>
</ContainerImg>
<SliderText>
I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.
</SliderText>
<ComentAuth>Jannike Borg, Publisher</ComentAuth>
</SliderContainerItem>
    </SliderDiv>

  </SplideSlide>
</Splide>
<DivButton>
<ButtonSlider>
More reviews
</ButtonSlider>
</DivButton>
    </Container>
  )
}

export default SliderSection
