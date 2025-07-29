import React from 'react'
import GlobalOfficeSection from './GlobalOffice'
import ContactSection from './HeroContact'
import ContactPage from './ContactForm'

const ParentContact = () => {
  return (
    <div className='overflow-x-hidden pt-10'>
      <ContactSection />
      <ContactPage />
      <GlobalOfficeSection />
    </div>
  )
}

export default ParentContact