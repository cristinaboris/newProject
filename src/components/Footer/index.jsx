import React from 'react'
import styled from 'styled-components'
import one from '../../assets/one.png'
import telep from '../../assets/Phone_black.png'
import logo from '../../assets/Your.logo.png'

const Container = styled.div`
background: #F3F2F0;
width: 100%;
min-height: 250px;
height: 100%;
margin-top: 80px;
padding: 50px 0px;
`
const ContainerFooterText = styled.div`
display: flex;
justify-content: center;
margin: 0  auto;
flex-wrap: wrap;
gap: 10%
//margin-bottom: 30px;
//border-bottom: 1px solid #000;
//@media screen {
  //flex-direction: column;
//}(
`
const FooterSectionItem = styled.div`
  
`
const TitleItem = styled.h3`
  
`
const PItem = styled.p`
 padding-top: 20px;
 color: gray;
`
const ContainerInput = styled.div`
  display: flex;
`
const _Input = styled.input`
  border: 1px solid #EE685F;
  width: 336px;
  height: 40px;
  margin-top: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`
const ButtonInput = styled.button`
width: 40px;
cursor: pointer;
margin-top: 10px;
height: 42px;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
background: #EE685F;
border: 1px solid #EE685F;
`
const ButtonImg = styled.img`
  
`

const LinkSectionContainer  = styled.div`
  width: 85%;
  padding: 30px 0;
  margin: 0 auto;
  margin-top: 30px;
  border-top: 1px solid gray;
`
const SectionContainerItems = styled.div`
  display: flex;
  justify-content: space-between;
`
const ImageFooterSection = styled.img`
  
`
const  DesignBy = styled.p`
  
`
const ContainerForLink = styled.div`
display: flex;
gap: 4px;

`
const Linkl = styled.img`
  width: 100%;
  height: 100%;
`

const Footer = () => {
  return (
    <Container>
      <ContainerFooterText>
<FooterSectionItem>
<TitleItem>
Title of section
</TitleItem>
<PItem>Page title</PItem>
<PItem>Page title</PItem>
<PItem>Page title</PItem>
</FooterSectionItem>
<FooterSectionItem>
<TitleItem>
Title of section
</TitleItem>
<PItem>Page title</PItem>
<PItem>Page title</PItem>
<PItem>Page title</PItem>
</FooterSectionItem>
<FooterSectionItem>
<TitleItem>
Title of section
</TitleItem>
<PItem>Page title</PItem>
<PItem>Page title</PItem>
<PItem>Page title</PItem>
</FooterSectionItem>
<FooterSectionItem>
<TitleItem>Subscribe to Newsletter</TitleItem>
<PItem>Your email</PItem>
<ContainerInput>
<_Input/>
<ButtonInput><ButtonImg src={one}/></ButtonInput>
</ContainerInput>
</FooterSectionItem>
      </ContainerFooterText>
<LinkSectionContainer>
<SectionContainerItems>
<ImageFooterSection src={logo}/>
<DesignBy>Design by <a href='#'>Delvig</a></DesignBy>
<ContainerForLink>
<Linkl src={telep}/>
<Linkl src={telep}/>
<Linkl src={telep}/>
<Linkl src={telep}/>
<Linkl src={telep}/>
</ContainerForLink>
</SectionContainerItems>
</LinkSectionContainer>

    </Container>
  )
}

export default Footer
