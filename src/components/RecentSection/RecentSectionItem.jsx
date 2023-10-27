import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
width: 360px;
height: 440px;
max-height: 100%;
max-width: 100%;
border: 1px solid gray;
cursor: pointer;
&:hover{
      background: wheat;
    }
`
const ContainerImage = styled.div`
display: flex;
justify-content: center;
align-items: center;
` 
const ImageRecent = styled.img`
padding-top: 10px;
    max-width: 250px;
    max-height: 280px;
    width: 250px;
    height: 280px;
`
const ContainerTextRecent = styled.div`
text-align: left;
padding-left: 5px;
`
const TitleRecent = styled.h4`

height: 45px
`
const PriceRecent = styled.p`
height: 25px;
`
const DescriptionRecent = styled.p`

`
//title,price,desc


const RecentSectionItem = ({item}) => {
  return (
    <Container>
    <ContainerImage>
        <ImageRecent src={item.image}/>
        </ContainerImage>
        <ContainerTextRecent>
        <TitleRecent>{item.title}</TitleRecent>
    <PriceRecent>${item.price}</PriceRecent>
    <DescriptionRecent>{item.description}</DescriptionRecent>
    </ContainerTextRecent>
    </Container>
  )
}

export default RecentSectionItem
