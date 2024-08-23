import React from 'react'
import SugesstionIcons from '../../components/SuggestionIcons/SugesstionIcons'
import Banner from '../../components/Banner/Banner'
import Offers from '../../components/Offers/Offers'
import ShopCategories from '../../components/ShopCategories/ShopCategories'
import OrderWithPrescription from '../../components/OrderWithPrescription/OrderWithPrescription'
import NewLaunches from '../../components/NewLaunches/NewLaunches'
import Trending from '../../components/Trending/Trending'
import LabTests from '../../components/LabTest/LabTest'
import BecomePlusMember from '../../components/BecomePlusMember/BecomePlusMember'
import ShopByConcern from '../../components/ShopByConcern/ShopByConcern'
import FrequentlyBookedLabTests from '../../components/FrequentlyBookedLabTests/FrequentlyBookedLabTests'
import PaymentOffers from '../../components/PaymentOffers/PaymentOffers'
import WellnessEssentials from '../../components/WellnessEssentials/WellnessEssentials'
import Spotlight from '../../components/Spotlight/Spotlight'
import HealthArticles from '../../components/HealthArticles/HealthArticles'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import CustomerReview from '../../components/CustomerReview/CustomerReview'

const Homepage = () => {
  return (
    <div>
      <SugesstionIcons/>
      <Banner/>
      <Offers/>
      <ShopCategories/>
      <OrderWithPrescription/>
      <NewLaunches/>
      <Trending/>
      <LabTests/>
      <BecomePlusMember/>
      <ShopByConcern/>
      <FrequentlyBookedLabTests/>
      <PaymentOffers/>
      <WellnessEssentials/>
      <Spotlight/>
      <HealthArticles/>
      <WhyChooseUs/>
      <CustomerReview/>
    </div>
  )
}

export default Homepage
