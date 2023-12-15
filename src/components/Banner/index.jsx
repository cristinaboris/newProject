import React from 'react'
import styled, { useTheme } from "styled-components";
import banner from '../../assets/logo.png';
import where from '../../assets/icon2.png'
import where2 from '../../assets/icon (1).png'
import Button from '../../assets/button.png'
import {Container,WhereRight,ContainerWhen,BannerImg,BannerText,MainText,ButtonDiv,LittleText, WhereSectionGray,SectionBlock, WhereLeft,ImageWhere,TextWhere, WhereTextSection,ButtonImg} from './BannerStyled'
import { Box, Typography, useMediaQuery } from '@mui/material';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
//import { makeStyles } from "@material-ui/core/styles";


const Banner = () => {

//const theme = useTheme()
//const mathes = useMediaQuery(theme.breakpoints.down('md'))


 const Container = styled(Box)(({theme}) => ({
  width: '95%',
  height: '100%',
  margin: '0 auto',
  display: 'flex',
  flexDirection:'column',
  position: 'relative',
  zIndex: '0'

 })) 
const ContainerBox = styled(Box)(({theme}) =>({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '90%',
  margin: '0 auto'
}))

const ImageBanner = styled('img')(({theme}) => ({
width: '100%',
height: '100%',
}))

const BoxContainerTitle = styled(Box)(({theme}) => ({
  position: 'absolute',
  top: '10px',
  paddingTop: '4%',
 paddingLeft: '4%'
  }))

const TextBanner = styled(Typography)(({theme}) => ({
textShadow: '1px 3px 2px grey',
width: 320,
fontWeight: 'bold',
fontSize: 20,
textAlign: 'left',

}))

const LittleText = styled(Box)(({theme})=> ({
width: 420,
marginTop: 22,


})) 

const DivInput = styled(Box)(({theme}) =>({
display: 'flex',
justifyContent: 'center'
}))

const InputBox = styled(Box)(({theme}) => ({
display: 'flex',
height:'40px',
position: 'absolute',
bottom: 0,
bottom: '-15px',
width: 500,
maxHeight: 70,
height: 60,
maxWidth: '100%',
//background: 'white',



}))

const MainInputLeft = styled(Box)(({theme})=> ({
  width: '100%',
 borderTopLeftRadius: '40px',
 borderBottomLeftRadius: '40px',
 border: '2px solid ',
 width: '100%',
 background: 'white',
 padding: '10px'
}))

const MainInputRight = styled(Box)(({theme})=> ({
  borderTopRightRadius: '40px',
  borderBottomRightRadius: '40px',
  border: '2px solid ',
  width: '100%',
  background: 'white',
  padding: '10px'
}))

const WhereImage = styled('img')(({theme}) => ({
  width: '30px',
  height: '30px',
  padding: '5px'
  }))
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
<InputBox>
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
//MainInputLeft placeholder='Where' md={{fontWeight: 15}} id="outlined-basic" fullWidth label="Outlined" variant="outlined" />






//<BannerImg src={banner}/>
//<BannerText>
//<MainText>
//Find an apartment for your vacation
//</MainText>
//<LittleText>
//We have several thousand apartments for every taste in every corner of the globe
//</LittleText>
//</BannerText>
//<SectionBlock>
//<WhereLeft>
 // <ImageWhere src={where}/>
//<TextWhere>
 // <WhereTextSection>
 // Where
  //</WhereTextSection>
//<WhereSectionGray>Search Destination</WhereSectionGray>
 // </TextWhere>
//</WhereLeft>

//<WhereRight>
 //<ContainerWhen>

//<ImageWhere src={where2}/>
//<TextWhere>
 // <WhereTextSection>
 // When
  //</WhereTextSection>
//<WhereSectionGray>Select Date</WhereSectionGray>
  //</TextWhere></ContainerWhen>
 // <ButtonDiv>
//<ButtonImg src={Button}/> </ButtonDiv>
//</WhereRight>
//</SectionBlock>