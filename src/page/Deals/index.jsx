
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
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

const Container = styled.div`
width: 100%;
min-height: 100vh;
height: 100%;
`
const MainTitle = styled.div`
    text-align: center;
    padding: 50px 0;
`
const ContainerFinder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const ContainerDeals =styled.div`
width: 85%;
margin: 0 auto;
margin-top: 40px;
    
`
const ContainerFilterIcon = styled.div`
display: flex;
justify-content: space-between;
`

const LeftButton = styled.a`
    color: #EE685F;
    cursor: pointer;
    font-size: 18px;
    border-radius: 10px;
    padding: 8px 10px;
    border: 2px solid #EE685F;
`
const FilterRight = styled.div`
  display: flex;  
  gap: 20px;
  cursor: pointer;
`
const FilterRightElementIconContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
`
const Pfilter = styled.p`
    color: #EE685F
`

const FilterImg = styled.img`
    width: 25px;
    height: 25px;
`


const WhereLeft = styled.div`
display: flex;
width: 50%;
  gap: 10px;
  padding: 10px;
  margin: 10px;
  flex-direction: row;
  text-align:left;
  border-right: 1px solid grey;
  
`

const ImageWhere = styled.img`
  width: 30px;
  height: 30px;
`

const TextWhere = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const WhereTextSection = styled.p`
  color: black;
` 
const WhereSectionGray = styled.p`
  
color: gray;
`
const WhereRight = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  gap: 10px;
  padding: 10px;
  margin: 10px;
  flex-direction: row;
  text-align:left;
 
`

const ButtonImg = styled.img`
  cursor: pointer;
`
const ButtonDiv = styled.div`
  
`
const ContainerWhen = styled.div`
  display: flex;
  gap: 15px;
`
const SecondPartRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    gap: 10px;
  
`
const RightSort = styled.p`
    
`
const RightSortRed = styled.p`
color: #EE685F;
`
const Searcing = styled.input`
border-bottom-left-radius: 34px;
border-top-left-radius: 34px;
border-bottom-right-radius: 34px;
border-top-right-radius: 34px;
padding: 20px;
width: 100%;
border: none;
font-size: 26px;
`
const SectionBlock = styled.div`
  display: flex;
  width: 570px;
  height: 70px;
  background: white;
  border: 1px solid grey;
  border-radius: 45px;
  position: relative;
  

`
const Uling = styled.ul`
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
const Ling = styled.li`
  padding: 10px;
  &:hover{
    background: #ada8a0;
    cursor: pointer;
    transition: all .3s;
  }
`
const ContainerItem =styled.div`
display: flex;
gap: 25px;
background: white;
border: none;
flex-wrap: wrap;
justify-content: center;
`

const ContainerForItems = styled.div`
`

const ContainerpAGINATION = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 40px;
`
const Deals = () => {

  
const dispatch = useDispatch();

useEffect(() =>{

},[])

 const {items} = useSelector((state) => state.data) 



 const [value, setValue] = useState('') 
 const [open, setOpen] = useState(true)

const inputClick = () => {
  setOpen(true)
}





 const filterItems = items.filter(item => {
return item.title.toLowerCase().includes(value.toLocaleLowerCase())
})




const [sort, setSort] = React.useState('');

const handleChange = (event) => {
  setSort(event.target.value);
};

useEffect(() => {
  console.log(filterItems)
})

const [currentPage, setCurrentPage] = useState(1);
const [sortingItem, setSorting] = useState(filterItems)
  const itemsPerPage = 6;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortingItem.slice(indexOfFirstItem, indexOfLastItem);


const allElement = () => {
  setSorting(filterItems)
 
  console.log(filterItems, '!!!!!!!')
}

const sortByPricesLow = () =>{
  const filtering = currentItems.sort((a,b) => a.price - b.price)
  setSorting(filtering)
 
  
} 

const sortByPricesHigh = () =>{
  const filteringHigh = currentItems.sort((a,b) => b.price - a.price)
  setSorting(filteringHigh)
  
  
} 
const sortRating = () =>{
  const filteringHigh = currentItems.sort((a,b) => b.rating.rate - a.rating.rate)
  setSorting(filteringHigh)
  
 
} 
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
  
          <MenuItem onClick={sortByPricesLow} value={10}>Price(hight)</MenuItem>
          <MenuItem onClick={sortByPricesHigh} value={20}>Price(low)</MenuItem>
          <MenuItem onClick={sortRating} value={30}>Rating</MenuItem>
          <MenuItem onClick={allElement} value={40}>All</MenuItem>
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
          sortingItem.map((item,i) => (
            <SpecialSectionTwo item={item}/>
          ))
          
        }</ContainerItem>


</ContainerDeals>
<ContainerpAGINATION>
<button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
       Prev
      </button>
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


