import React from 'react'
import styled from 'styled-components'
import one from '../../assets/one.png'
import telep from '../../assets/Phone_black.png'
import logo from '../../assets/Your.logo.png'
import { Container,TitleItem,PItem,ContainerInput,_Input,ButtonInput,ButtonImg,LinkSectionContainer,SectionContainerItems,ImageFooterSection,DesignBy,ContainerForLink,Linkl,FooterSectionItem, ContainerFooterText } from './FooterStyled'


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
