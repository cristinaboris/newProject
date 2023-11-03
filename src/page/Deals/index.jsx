
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import where from '../../assets/icon2.png'
import where2 from '../../assets/icon (1).png'
import Button from '../../assets/button.png'
import filter from '../../assets/icon4.png'
import { useSelector } from 'react-redux';
import SpecialSectionTwo from "../../components/SpecialSection/SpecialSectionTwo";
import ReactPaginate from 'react-paginate';

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
font-size: 25px;
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

  

const itemClickHandle  = (e) => {
  setValue(e.target.textContent)
  setOpen(!open)
}
 const {items} = useSelector((state) => state.data)   

 const [value, setValue] = useState('') 
 const [open, setOpen] = useState(true)

const inputClick = () => {
  setOpen(true)
}
console.log(items)

 const filterItems = items.filter(item => {
return item.title.toLowerCase().includes(value.toLocaleLowerCase())
 
})
const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterItems.slice(indexOfFirstItem, indexOfLastItem);
//sorting
const sorting = () => {

}


 

    return (
      <Container>
       <MainTitle><h1>Last Minute Deals</h1></MainTitle>
       <ContainerFinder>
       <SectionBlock>

<Searcing type="text" value={value} placeholder='Searching for...'
onChange={(event) => setValue(event.target.value)} 
onClick={inputClick}
/>
<Uling>
 { value && open?
  filterItems.map((item,i) => {
    return (
      <Ling onClick={itemClickHandle}>{item.title}</Ling>
    )
  }) : null
 }

</Uling>
</SectionBlock>
</ContainerFinder>


<ContainerDeals>
<ContainerFilterIcon>
<LeftButton>Show on map shop</LeftButton>
<FilterRight>

<FilterRightElementIconContainer>
<FilterImg src={filter}/>


<form>
<label htmlFor='sort'>
</label>
<select name="sort" id="sort" onClick={sorting}>
<option value="lower">Price(lower)</option>
<option value="highest">Price(highest)</option>
<option value="rating">Rating</option>
<option value="a-z">A-Z</option>

</select>
</form>


<Pfilter>Filter</Pfilter>
</FilterRightElementIconContainer>
 <SecondPartRight>

 <RightSortRed></RightSortRed>
 </SecondPartRight>
 </FilterRight>
 </ContainerFilterIcon>

 <ContainerItem>
        {
          currentItems.map((item,i) => (
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


