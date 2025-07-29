import React from 'react'
import CorporateMembershipSection from './Text'
import HeroImageSection from './CorporateHero'
import MembershipPlans from './MemberShip'
import PaymentDetails from './PaymentDetail'

const ParentCorporate = () => {
  return (
    <>
    <HeroImageSection />
    <CorporateMembershipSection />
    <MembershipPlans />
    <PaymentDetails />
    </>
  )
}

export default ParentCorporate