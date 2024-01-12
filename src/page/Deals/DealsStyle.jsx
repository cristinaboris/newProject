import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
min-height: 100vh;
height: 100%;
`
export const MainTitle = styled.div`
    text-align: center;
    padding: 50px 0;
`
export const ContainerFinder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ContainerDeals =styled.div`
width: 85%;
margin: 0 auto;
margin-top: 40px;
    
`
export const ContainerFilterIcon = styled.div`
display: flex;
justify-content: space-between;
`

export const LeftButton = styled.a`
    color: #EE685F;
    cursor: pointer;
    font-size: 18px;
    border-radius: 10px;
    padding: 8px 10px;
    border: 2px solid #EE685F;
`
export const FilterRight = styled.div`
  display: flex;  
  gap: 20px;
  cursor: pointer;
`
export const FilterRightElementIconContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
`
export const Pfilter = styled.p`
    color: #EE685F;
`

export const FilterImg = styled.img`
    width: 25px;
    height: 25px;
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
export const SecondPartRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    gap: 10px;
  
`
export const RightSort = styled.p`
    
`
export const RightSortRed = styled.p`
color: #EE685F;
`
export const Searcing = styled.input`
border-bottom-left-radius: 34px;
border-top-left-radius: 34px;
border-bottom-right-radius: 34px;
border-top-right-radius: 34px;
padding: 20px;
width: 100%;
border: none;
font-size: 26px;
`
export const SectionBlock = styled.div`
  display: flex;
  width: 570px;
  height: 70px;
  background: white;
  border: 1px solid grey;
  border-radius: 45px;
  position: relative;
  

`
export const Uling = styled.ul`
  left: 0;
  top: 50px;
  position: absolute;
  background-color: white;
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.15);
  z-index: 10;
  max-height: 240px;
  height: auto;
  overflow: auto;
`
export const Ling = styled.li`
  padding: 10px;
  &:hover{
    background: #ada8a0;
    cursor: pointer;
    transition: all .3s;
  }
`
export const ContainerItem =styled.div`
display: flex;
gap: 25px;
background: white;
border: none;
flex-wrap: wrap;
justify-content: center;
`

export const ContainerForItems = styled.div`
`

export const ContainerpAGINATION = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 40px;
`
