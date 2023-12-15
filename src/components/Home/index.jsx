import React, { useState , MouseEvent} from 'react'
//import styled from "styled-components";
import logo from '../../assets/Your.logo.png'
import icon from '../../assets/icon.png';
import language from '../../assets/language.png';
import money from '../../assets/money.png'
import { Link } from 'react-router-dom';
import { Left,Right,Logo, Container, Menu, MenuItems,NavLink, } from './HomeStyled';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuList, styled } from '@mui/material';
import logoImage from '../../assets/Your.logo.png'



const Home = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
  
    setDrawerOpen(open);
  };

  const menuItems = [
  {name:'Home', ref:'/'}, 
  {name: 'Last Minute Deals',ref:'/deals'},
  {name:'Category', ref:'/category'}, 
  {name:'Contacts', ref:'/contct'}];

 const NavLinks = styled(Typography)(({theme})=> ({
  fontSize: '14px',
  fontWeight: 'bold',
  cursor: 'pointer',
  color: 'black',
  '&:hover': {
    color: 'red'
 }
}))

const NavBarLinksBox = styled(Box)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))

const CustomMenuItem = styled(MenuIcon)(({theme})=> ({
  cursor: 'pointer',
  display: 'none',
  color: 'black',
  marginRight: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    display: 'block'
  }
}))

const NavbarContainer = styled(Container)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(5),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
  }
}))

const NavBarLogo = styled('img')(({theme}) => ({
  cursor: 'pointer',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const Linking = styled(Link)(({theme}) => ({
  textDecoration: 'none',
  color: 'black',
  '&:hover': {
    color: 'red'
 }

}))
  return (
    <NavbarContainer>
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2.5rem'}}>
<Box sx={{display: 'flex', alignItems: 'center'}}>

<Linking to='/'>
<NavBarLogo src={logoImage} alt='logo'/></Linking>
</Box>
<NavBarLinksBox>
  <NavLinks variant='body2'>
    <Linking to='/deals'> Last Minute Deals</Linking></NavLinks>
  <NavLinks variant='body2'>
    <Linking to='/category'>
    Category</Linking></NavLinks>
  <NavLinks variant='body2'>About Us</NavLinks>
  <NavLinks variant='body2'>Contacts</NavLinks>
</NavBarLinksBox>
<Box sx={{display: {xs: 'flex', md:'none'}}}>
<IconButton   
            onClick={toggleDrawer(true)}>
  <MenuIcon />
</IconButton>

<Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{width: 400, display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          {menuItems.map((text, index) => (
            <Link to={text.ref}>
            <ListItem  key={text} onClick={toggleDrawer(false)}>
              <ListItemText  primary={text.name} />
            </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
</Box>
      </Box>

      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center' , gap: '1rem'}}>
     <NavLink variant='body2'>
     <Linking to='/cart'>Cart</Linking>
      </NavLink>
     <NavLink variant='body2'>
      <Linking to='/user'>User</Linking>
      </NavLink>
      </Box>

    </NavbarContainer>

  )}

export default Home

//{   <Container>
//<Left>
//<Menu>
//<MenuItems><NavLink to='/'>
//<Logo src={logo}/></NavLink>
//</MenuItems>
//<MenuItems> <NavLink to='/deals'>Last Minute Deals</NavLink></MenuItems>
//<MenuItems><NavLink to='/category'>Category</NavLink></MenuItems>
//<MenuItems>About Us</MenuItems>
//<MenuItems>Contacts</MenuItems>
//</Menu>
//</Left>
//<Right>
   // <Menu>
     //   <MenuItems><NavLink to='/cart'><Logo src={money}/></NavLink></MenuItems>
     //   <MenuItems><Link to='user'><Logo src={icon}/></Link></MenuItems>
  //  </Menu>
//</Right>
//    </Container>
//
