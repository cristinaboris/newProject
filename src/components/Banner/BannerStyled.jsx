import styled from "styled-components"
import { Box, Typography, useMediaQuery } from '@mui/material';
import { Link } from "react-router-dom";


export const Container = styled(Box)(({theme}) => ({
  width: '95%',
  height: '70%',
  margin: '0 auto',
  display: 'flex',
  flexDirection:'column',
  position: 'relative',
  zIndex: '0'

 })) 


 export const ImageBanner = styled('img')(({theme}) => ({
  width: '100%',
  maxHeight: '600px',
  }))

export const LinkButton = styled(Link)(({theme}) => ({
  textDecoration: 'none',
  width: '600px',
  fontWeight: 'bold',
  color: 'black',
  '&:hover': {
    color: 'red'
 }

}))

 export const BoxContainerTitle = styled(Box)(({theme}) => ({
  position: 'absolute',
  top: '10px',
  paddingTop: '4%',
 paddingLeft: '4%'
  }))


export const CenterButtonContainer = styled(Box)(({theme}) => ({
  display: 'flex',
    justifyContent: 'center',
    top: '-34px',
    position: 'relative'

}))
export const ButtonCenter = styled.button(({theme}) => ({
width: '100%',
height: '68px'

}))

  export const TextBanner = styled(Typography)(({theme}) => ({
    textShadow: '1px 3px 2px grey',
    width: 320,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'left',
    
    }))

export const LittleText = styled(Box)(({theme})=> ({
  width: 420,
  marginTop: 22,
  
  
  }))     

export const BannerText = styled.div`
  width: 380px;
  text-align: left;
  padding-top: 4%;
  padding-left: 4%;
  position: absolute;
  z-index: 0;
 
`
export const MainText = styled.h1`
   font-size: 40px;
   text-shadow: 1px 3px 2px grey;

`

export const WhereImage = styled('img')(({theme}) => ({
  width: '30px',
  height: '30px',
  padding: '5px'
  }))

export const DivInput = styled(Box)(({theme}) =>({
  display: 'flex',
  justifyContent: 'center',
  
  }))

  export const InputBox = styled(Box)(({theme}) => ({
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


    export const MainInputRight = styled(Box)(({theme})=> ({
      borderTopRightRadius: '40px',
      borderBottomRightRadius: '40px',
      border: '2px solid ',
      width: '100%',
      background: 'white',
      padding: '10px'
    }))

    export const MainInputLeft = styled(Box)(({theme})=> ({
      width: '100%',
     borderTopLeftRadius: '40px',
     borderBottomLeftRadius: '40px',
     border: '2px solid ',
     width: '100%',
     background: 'white',
     padding: '10px'
    }))
//export const LittleText = styled.p`
//padding-top: 10px;
//letter-spacing: 1px;
//line-height: 1.2;
//`
export const SectionBlock = styled.div`
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
export const WhereLeft = styled.div`
display: flex;
width: 50%;
  gap: 10px;
  padding: 10px;
  margin: 10px;
  flex-direction: row;
  text-align:left;
  border-right: 1px solid grey;
  
`

export const ImageWhere = styled.img`
  width: 30px;
  height: 30px;
`

export const TextWhere = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const WhereTextSection = styled.p`
  color: black;
` 
export const WhereSectionGray = styled.p`
  
color: gray;
`
export const WhereRight = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  gap: 10px;
  padding: 10px;
  margin: 10px;
  flex-direction: row;
  text-align:left;
 
`

export const ButtonImg = styled.img`
  cursor: pointer;
`
export const ButtonDiv = styled.div`
  
`
export const ContainerWhen = styled.div`
  display: flex;
  gap: 15px;
`
export const ContainerBox = styled(Box)(({theme}) =>({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '90%',
  margin: '0 auto'
}))