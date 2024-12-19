import React from 'react'
import Navbar from '../components/navbar/navbar'
import HeaderSection from '../components/headerSection/HeaderSection'
import SearchForm from '../components/form/searchForm'
import CategorySection from '../components/categorySection/categorySection'
import NearbyDeals from '../components/nearByDeals/nearbyDeals'
import DealsofTheDay from '../components/dealsOfTheday/dealsOfTheDay'
import AppDownloadSection from '../components/appDownload/downloadAppSection'
import StatsSection from '../components/stats/StatsSection'
import InquiryWithMapSection from '../components/inquiry/InquirySection'
import Footer from '../components/footer/Footer'

function MainPage() {
  return (
    <div>
      <Navbar/>
      <HeaderSection/>
      <SearchForm/>
      <CategorySection/>
      <NearbyDeals/>
      <DealsofTheDay/>
      <AppDownloadSection/>
      <StatsSection/>
      <InquiryWithMapSection/>
      <Footer/>
    </div>
  )
}

export default MainPage
