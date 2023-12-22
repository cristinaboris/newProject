import React from 'react'
import styled, { useTheme } from "styled-components";
import banner from '../../assets/logo.png';
import where from '../../assets/icon2.png'
import where2 from '../../assets/icon (1).png'
import Button from '../../assets/button.png'
import {Container,ContainerBox,BoxContainerTitle,ImageBanner,TextBanner,LittleText ,InputBox,MainInputLeft,WhereImage,MainInputRight,DivInput} from './BannerStyled'
import { Box, Typography, useMediaQuery } from '@mui/material';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
//import { makeStyles } from "@material-ui/core/styles";


const Banner = () => {

  return (
    
<Container>
<ContainerBox>
  <Box>
<ImageBanner src={banner}/>
<BoxContainerTitle>
  <TextBanner variant='h4'>Find an apartment for your vacation</TextBanner>
  <LittleText>
  <Typography md={{letterSpacing: 6}}>We have several thousand apartments for
     every taste in every corner of the globe
  </Typography>
  </LittleText>
</BoxContainerTitle>
</Box>


<DivInput>
<InputBox >
<MainInputLeft sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <WhereImage src={where}  />
        <TextField id="input-with-sx" label="Where" variant="standard" />
      </MainInputLeft>
   
      <MainInputRight sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <WhereImage src={where2}  />
        <TextField id="input-with-sx" label="When" variant="standard" />
      </MainInputRight>
</InputBox>
</DivInput>
</ContainerBox>
</Container>
  )
}

export default Banner
