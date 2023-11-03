import styled from 'styled-components'


export const Container = styled.div`
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
export const ContainerImage = styled.div`
display: flex;
justify-content: center;
align-items: center;
` 
export const ImageRecent = styled.img`
padding-top: 10px;
    max-width: 250px;
    max-height: 280px;
    width: 250px;
    height: 280px;
`
export const ContainerTextRecent = styled.div`
text-align: left;
padding-left: 5px;
`
export const TitleRecent = styled.h4`

height: 45px
`
export const PriceRecent = styled.p`
height: 25px;
`
export const DescriptionRecent = styled.p`

`