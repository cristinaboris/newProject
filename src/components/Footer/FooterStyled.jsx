import styled from "styled-components";

export const Container = styled.div`
background: #F3F2F0;
width: 100%;
min-height: 250px;
height: 100%;
margin-top: 80px;
padding: 50px 0px;
`
export const ContainerFooterText = styled.div`
display: flex;
justify-content: center;
margin: 0  auto;
flex-wrap: wrap;
gap: 10%
`
export const FooterSectionItem = styled.div`
  padding: 20px;
`
export const TitleItem = styled.h3`
  
`
export const PItem = styled.p`
 padding-top: 20px;
 color: gray;
`
export const ContainerInput = styled.div`
  display: flex;
`
export const _Input = styled.input`
  border: 1px solid #EE685F;
  width: 336px;
  height: 40px;
  margin-top: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
@media (max-width: 768px) {
  border: 1px solid #EE685F;
  width: 120px;
  height: 40px;
  margin-top: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
    
  }
`
export const ButtonInput = styled.button`
width: 40px;
cursor: pointer;
margin-top: 10px;
height: 42px;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
background: #EE685F;
border: 1px solid #EE685F;
`
export const ButtonImg = styled.img`

`

export const LinkSectionContainer  = styled.div`
  width: 85%;
  padding: 30px 0;
  margin: 0 auto;
  margin-top: 30px;
  border-top: 1px solid gray;
`
export const SectionContainerItems = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }



`
export const ImageFooterSection = styled.img`
@media (max-width: 768px) {
    width: 200px;
    margin: 0 auto;
    display: flex;
  
    
  }

`
export const  DesignBy = styled.p`
  
`
export const ContainerForLink = styled.div`
display: flex;
gap: 4px;
@media (max-width: 768px) {
    justify-content: center;
    padding-top: 20px;
  }

`

export const Linkl = styled.img`
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 40px;
    height: 40px;
  }
`