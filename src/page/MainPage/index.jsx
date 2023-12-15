import React from 'react'
import Banner from '../../components/Banner'
import ChooseSection from '../../components/ChooseSection'
import RecentSection from '../../components/RecentSection'
import SliderSection from '../../components/SliderSection'
import SpecialSection from '../../components/SpecialSection'

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
