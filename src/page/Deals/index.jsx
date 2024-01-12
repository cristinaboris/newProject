
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import {Container, MainTitle, ContainerFinder, ContainerDeals, ContainerFilterIcon, LeftButton, FilterRight, FilterRightElementIconContainer,Pfilter,FilterImg,WhereLeft,ImageWhere,TextWhere, WhereTextSection,WhereRight,ButtonImg,ButtonDiv,ContainerWhen,SecondPartRight,RightSort,RightSortRed, Searcing, SectionBlock, Uling,Ling,ContainerItem,ContainerForItems,ContainerpAGINATION} from './DealsStyle'
import where from '../../assets/icon2.png'
import where2 from '../../assets/icon (1).png'
import Button from '../../assets/button.png'
import filter from '../../assets/icon4.png'
import { useDispatch, useSelector } from 'react-redux';
import SpecialSectionTwo from "../../components/SpecialSection/SpecialSectionTwo";
import ReactPaginate from 'react-paginate';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { itemsMain } from '../../redux/actions';



const Deals = () => {

  
const dispatch = useDispatch();

//items

useEffect(() =>{


},[])

const {items} = useSelector((state) => state.data) 


 const [value, setValue] = useState('') 
 const [open, setOpen] = useState(true)

const inputClick = () => {
  setOpen(true)
}

// const filterItems = items.filter(item => {
//return item.title.toLowerCase().includes(value.toLocaleLowerCase())
//})


const [sort, setSort] = React.useState('');

const handleChange = (event) => {
  setSort(event.target.value);
};



//const [currentPage, setCurrentPage] = useState(1);

//const [sortingItem, setSorting] = useState(items)
 // const itemsPerPage = 6;
 // const indexOfLastItem = currentPage * itemsPerPage;
 // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
 // const currentItems = sortingItem.slice(indexOfFirstItem, indexOfLastItem);


// const allElement = () => {
//   setSorting(items)
 
//   console.log(items, '!!!!!!!')
// }

// const sortByPricesLow = () =>{
//   const filtering = currentItems.sort((a,b) => a.price - b.price)
//   setSorting(filtering)
 
  
// } 

// const sortByPricesHigh = () =>{
//   const filteringHigh = currentItems.sort((a,b) => b.price - a.price)
//   setSorting(filteringHigh)
  
  
// } 
// const sortRating = () =>{
//   const filteringHigh = currentItems.sort((a,b) => b.rating.rate - a.rating.rate)
//   setSorting(filteringHigh)
  
 
// } 


    return (
      <Container>
       <MainTitle><h1>Last Minute Deals</h1></MainTitle>
       <ContainerFinder>
       <SectionBlock>

<Searcing type="text"  placeholder='Searching for...'
onChange={(event) => setValue(event.target.value)} 
onClick={inputClick} value={value}
/>

</SectionBlock>
</ContainerFinder>


<ContainerDeals>
<ContainerFilterIcon>
<LeftButton>Show on map shop</LeftButton>
<FilterRight>

<FilterRightElementIconContainer>
<FilterImg src={filter}/>


<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label='filter'
          onChange={handleChange}
        >
{/*   
          <MenuItem onClick={sortByPricesLow} value={10}>Price(hight)</MenuItem>
          <MenuItem onClick={sortByPricesHigh} value={20}>Price(low)</MenuItem>
          <MenuItem onClick={sortRating} value={30}>Rating</MenuItem>
          <MenuItem onClick={allElement} value={40}>All</MenuItem> */}
        </Select>
      </FormControl>
    </Box>


<Pfilter>Filter</Pfilter>
</FilterRightElementIconContainer>
 <SecondPartRight>

 <RightSortRed></RightSortRed>
 </SecondPartRight>
 </FilterRight>
 </ContainerFilterIcon>

 <ContainerItem>
        {
          items.map((item,i) => (
            <SpecialSectionTwo item={item}/>
          ))
          
        }</ContainerItem>


</ContainerDeals>
<ContainerpAGINATION>
{/* <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
       Prev
      </button> */}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        
      >
        Next
      </button>
      </ContainerpAGINATION>
      </Container>
    );
  }

export default Deals


