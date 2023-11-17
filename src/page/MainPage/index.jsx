import React from 'react'
import Home from '../../components/Home'
import Banner from '../../components/Banner'
import ChooseSection from '../../components/ChooseSection'
import SpecialSection from '../../components/SpecialSection'
import SliderSection from '../../components/SliderSection'
import RecentSection from '../../components/RecentSection'
import Footer from '../../components/Footer'


const MainPage = () => {

  return (
    <div>
 
     <Banner/>
     <ChooseSection/>
     <SpecialSection/>
     <SliderSection/>
     <RecentSection/>
   
    </div>
  )
}

export default MainPage
