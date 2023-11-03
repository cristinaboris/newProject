import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width: 95%;
    margin: 0 auto;
    height: 10%;
    display: flex;
    justify-content: space-between;
    text-align: center;
    

`
export const Left = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1;
    align-items: center;
`

export const Right = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
`
export const Menu = styled.ul`
    display: flex;
    list-style: none;
   
`
export const MenuItems = styled.li`
    font-size: 20px;
    padding: 10px;
    color: black;
    cursor: pointer;
    &:hover{
        color: red;
    }
   
`
export const Logo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;

`
export const NavLink = styled(Link)`
   text-decoration: none;
   color: black;
   &:hover{
    color: red;
   }
`