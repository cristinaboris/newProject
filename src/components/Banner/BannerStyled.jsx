import styled from "styled-components"


export const Container = styled.div`
  width: 95%;
  height: 80vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  `

export const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 0;
  object-position: center;
`
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
export const LittleText = styled.p`
padding-top: 10px;
letter-spacing: 1px;
line-height: 1.2;
`
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