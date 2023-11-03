import { useEffect, useDispatch } from 'react'
import { createGlobalStyle } from "styled-components";
import './App.css'
import Home from './components/Home'
import Banner from './components/Banner';
import ChooseSection from './components/ChooseSection';
import SpecialSection from './components/SpecialSection';
import * as types from './redux/actionTypes'
import SliderSection from './components/SliderSection';
import RecentSection from './components/RecentSection';
import Footer from './components/Footer';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './components/User'
import MainPage from './page/MainPage';
import Deals from './page/Deals';
import Card from './page/Card/Card';
import Filter from './components/Filter';
import Form from './components/Feedback/Form';
import Cart from './components/Cart/Cart';
//import Auth0ProviderWithHistory from './auth0Provider';

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}`

function App() {



  return (
   
   <>
  
    <GlobalStyles/>
   <BrowserRouter>
   <Home/>
    <Routes >
      <Route element={<MainPage/>} path='/'/>
      <Route element={<Deals/>} path='deals'/>
      <Route element={<User/>} path='/user'/>
      <Route element={<Card/>} path='/deals/:id'/>
      <Route element={<Filter/>} path='/category'/>
      <Route element={<Form/>} path='/feedback'/>
      <Route element={<Cart/>} path='/cart'/>
    </Routes>
    <Footer/>
     </BrowserRouter>
 
     </>
  )
}

export default App
