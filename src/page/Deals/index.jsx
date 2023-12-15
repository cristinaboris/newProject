import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import filter from '../../assets/icon4.png'
import SpecialSectionTwo from '../../components/SpecialSection/SpecialSectionTwo';
import {
  Container,
  ContainerDeals,
  ContainerFilterIcon,
  ContainerFinder,
  ContainerItem,
  ContainerpAGINATION,
  FilterImg,
  FilterRight,
  FilterRightElementIconContainer,
  LeftButton,
  MainTitle,
  Pfilter,
  RightSortRed,
  Searcing,
  SecondPartRight,
  SectionBlock
} from './DealsStyled.jsx'

const Deals = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const { items } = useSelector((state) => state.data)
  //const {sortPrices} = useSelector((state) => state.data)
  const [value, setValue] = useState('')
  // const [open, setOpen] = useState(true)

  const inputClick = () => {
    setOpen(true)
  }

  const filterItems = items.filter(item => {
    return item.title.toLowerCase().includes(value.toLocaleLowerCase())
  })
  const [sortingItem, setSorting] = useState(filterItems)
  const [sort, setSort] = React.useState('');
  const currentItems = sortingItem.slice(indexOfFirstItem, indexOfLastItem);

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  useEffect(() => {
    console.log(items)
  })

  const allElement = () => {
    setSorting(filterItems)
  }

  const sortByPricesLow = () => {
    const filtering = currentItems.sort((a, b) => a.price - b.price)
    setSorting(filtering)
  }

  const sortByPricesHigh = () => {
    const filteringHigh = currentItems.sort((a, b) => b.price - a.price)
    setSorting(filteringHigh)
  }

  const sortRating = () => {
    const filteringHigh = currentItems.sort((a, b) => b.rating.rate - a.rating.rate)
    setSorting(filteringHigh)
  }

  return (
    <Container>
      <MainTitle><h1>Last Minute Deals</h1></MainTitle>
      <ContainerFinder>
        <SectionBlock>
          <Searcing type="text" placeholder="Searching for..."
                    onChange={ (event) => setValue(event.target.value) }
                    onClick={ inputClick } value={ value }
          />
        </SectionBlock>
      </ContainerFinder>
      <ContainerDeals>
        <ContainerFilterIcon>
          <LeftButton>Show on map shop</LeftButton>
          <FilterRight>
            <FilterRightElementIconContainer>
              <FilterImg src={ filter }/>
              <Box sx={ { minWidth: 120 } }>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Filter</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={ sort }
                    label="filter"
                    onChange={ handleChange }
                  >
                    <MenuItem onClick={ sortByPricesLow } value={ 10 }>Price(hight)</MenuItem>
                    <MenuItem onClick={ sortByPricesHigh } value={ 20 }>Price(low)</MenuItem>
                    <MenuItem onClick={ sortRating } value={ 30 }>Rating</MenuItem>
                    <MenuItem onClick={ allElement } value={ 40 }>All</MenuItem>
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
          { sortingItem.map((item, index) => <SpecialSectionTwo key={ index } item={ item }/>) }
        </ContainerItem>
      </ContainerDeals>
      <ContainerpAGINATION>
        <button
          onClick={ () => setCurrentPage(currentPage - 1) }
          disabled={ currentPage === 1 }
        >
          Prev
        </button>
        <button onClick={ () => setCurrentPage(currentPage + 1) }>
          Next
        </button>
      </ContainerpAGINATION>
    </Container>
  );
}

export default Deals


