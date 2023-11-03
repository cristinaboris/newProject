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
import { Reviews,ContainerImg,ButtonSlider,DivButton,ComentAuth, Container,ImageSlider, SliderContainerItem, SliderDiv, SliderText } from './SliderStyled';

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
