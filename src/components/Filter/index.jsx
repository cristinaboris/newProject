import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import women from '../../assets/women.jpeg'
import men from '../../assets/mens.jpeg'
import electic from '../../assets/elec.jpeg'
import jewelry from '../../assets/jewelry.jpeg'
import SpecialSectionTwo from '../SpecialSection/SpecialSectionTwo'
import { Ling, Containter, Uling, Image ,ContainerItem} from './FilterStyled'

const Filter = () => {

const {items} = useSelector((state) => state.data)    
const [filter, setFilter] = useState([])

const filterProduct = (cat) => {
    const updatedList = items.filter((x) => x.category === cat)
    setFilter(updatedList)
    console.log(updatedList)
}


console.log(items, 'items')
  return (
    <Containter>
      <Uling>

      <Ling onClick={()=>setFilter(items)}>

      <Image src={men}/>
        All</Ling>
        <Ling onClick={()=>filterProduct("men's clothing")}>
        <Image src={men}/>
        Men's clothing</Ling>
        <Ling onClick={()=>filterProduct("women's clothing")}>
        <Image src={women}/>
        Women's clothing</Ling>
        <Ling onClick={()=>filterProduct("jewelery")}>
        <Image src={jewelry}/>
        Jewelery</Ling>
        <Ling onClick={()=>filterProduct("electronics")}>
        <Image src={electic}/>
        Electronics</Ling>
      </Uling>
      <ContainerItem>
      {
        filter.map((item,i) => (
          <SpecialSectionTwo item={item}/>
        ))
      }
    </ContainerItem>
    </Containter>
  )
}

export default Filter
