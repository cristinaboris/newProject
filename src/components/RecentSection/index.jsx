import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import RecentSectionItem from './RecentSectionItem'

const Container = styled.div`
margin-top: 150px;
    width: 100%;
    height: 100%;
   
`
const TitleRecent = styled.h2`
padding: 100px;
text-align: center;
font-size: 30px;
`
const ContainerRecentItem = styled.div`
`
const ContainerSagaElement = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    
`


const RecentSection = () => {
    const {items} = useSelector((state) => state.data)

    const itemsRecent = items.slice(4,7)
    console.log(itemsRecent)
  return (
    <Container>
      <TitleRecent>Recent product</TitleRecent>

      <ContainerRecentItem>
<ContainerSagaElement>
{
itemsRecent.map((item,i) => (
    
        <RecentSectionItem item={item}/>
   
))
}</ContainerSagaElement>
      </ContainerRecentItem>


    </Container>
  )
}

export default RecentSection
