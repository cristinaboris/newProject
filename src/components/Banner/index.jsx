import React from 'react'
import banner from './cloth.jpeg';
import {Container,ContainerBox,LinkButton,CenterButtonContainer,ButtonCenter,ImageBanner} from './BannerStyled'
import { Box } from '@mui/material';


const Banner = () => {

  return (
    
<Container>
<ContainerBox>
  <Box>
<ImageBanner src={banner}/>
<CenterButtonContainer>
<LinkButton to='/deals'>
<ButtonCenter>
  See More Cloth
  </ButtonCenter></LinkButton>
</CenterButtonContainer>
</Box>

</ContainerBox>
</Container>
  )
}

export default Banner
