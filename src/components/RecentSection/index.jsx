import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import RecentSectionItem from './RecentSectionItem'
import {Container, TitleRecent, ContainerRecentItem, ContainerSagaElement} from './RecentSectionStyled'

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
