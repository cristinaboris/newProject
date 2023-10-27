import React from 'react'
import styled from "styled-components";
import logo from '../../assets/Your.logo.png'
import icon from '../../assets/icon.png';
import language from '../../assets/language.png';
import money from '../../assets/money.png'
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 95%;
    margin: 0 auto;
    height: 10%;
    display: flex;
    justify-content: space-between;
    text-align: center;
    

`
const Left = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1;
    align-items: center;
`

const Right = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
`
const Menu = styled.ul`
    display: flex;
    list-style: none;
   
`
const MenuItems = styled.li`
    font-size: 20px;
    padding: 10px;
    color: black;
    cursor: pointer;
    &:hover{
        color: red;
    }
   // @media (max-width: 600px) {
   // display: none;
 // }
`
const Logo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;

`
const NavLink = styled(Link)`
   text-decoration: none;
   color: black;
   &:hover{
    color: red;
   }
`

const Home = () => {
  return (
    <Container>
<Left>
<Menu>
<MenuItems><NavLink to='/'>
<Logo src={logo}/></NavLink>
</MenuItems>
<MenuItems> <NavLink to='/deals'>Last Minute Deals</NavLink></MenuItems>
<MenuItems>Blog</MenuItems>
<MenuItems>About Us</MenuItems>
<MenuItems>Contacts</MenuItems>
</Menu>
</Left>
<Right>
    <Menu>
        <MenuItems><Logo src={money}/></MenuItems>
        <MenuItems><Logo src={language}/></MenuItems>
        <MenuItems><Logo src={icon}/></MenuItems>
    </Menu>
</Right>
    </Container>
  )
}

export default Home
