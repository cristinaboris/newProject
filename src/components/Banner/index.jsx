import React from 'react'
import styled, { useTheme } from "styled-components";
import banner from './cloth.jpeg';
import where from '../../assets/icon2.png'
import where2 from '../../assets/icon (1).png'
import Button from '../../assets/button.png'
import {Container,ContainerBox,LinkButton,BoxContainerTitle,CenterButtonContainer,ButtonCenter,ImageBanner,TextBanner,LittleText ,InputBox,MainInputLeft,WhereImage,MainInputRight,DivInput} from './BannerStyled'
import { Box, Typography, useMediaQuery } from '@mui/material';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
//import { makeStyles } from "@material-ui/core/styles";


const Banner = () => {

  return (
    
<Container>
<ContainerBox>
  <Box>
<ImageBanner src={banner}/>
<CenterButtonContainer>
<ButtonCenter><LinkButton to='/deals'>
  See More Cloth</LinkButton>
  </ButtonCenter>
</CenterButtonContainer>
</Box>

</ContainerBox>
</Container>
  )
}

export default Banner
