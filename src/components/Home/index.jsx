import React from 'react'
import styled from "styled-components";
import logo from '../../assets/Your.logo.png'
import icon from '../../assets/icon.png';
import language from '../../assets/language.png';
import money from '../../assets/money.png'
import { Link } from 'react-router-dom';
import { Left,Right,Logo, Container, Menu, MenuItems,NavLink, } from './HomeStyled';


const Home = () => {
  return (
    <Container>
<Left>
<Menu>
<MenuItems><NavLink to='/'>
<Logo src={logo}/></NavLink>
</MenuItems>
<MenuItems> <NavLink to='/deals'>Last Minute Deals</NavLink></MenuItems>
<MenuItems><NavLink to='/category'>Category</NavLink></MenuItems>
<MenuItems>About Us</MenuItems>
<MenuItems>Contacts</MenuItems>
</Menu>
</Left>
<Right>
    <Menu>
        <MenuItems><NavLink to='/cart'><Logo src={money}/></NavLink></MenuItems>
        <MenuItems><Link to='user'><Logo src={icon}/></Link></MenuItems>
    </Menu>
</Right>
    </Container>
  )
}

export default Home
