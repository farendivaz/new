import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Form from '../components/contact/Form'
import Faq from '../components/contact/Faq'
import Maps from '../components/contact/Maps'
import ContactPerson from '../components/contact/ContactPerson'

const ContactUs = () => {
  return (
    <>
        <NavBar/>
        <Form/>
        <Faq/>
        <Maps/>
        <ContactPerson/>
        <Footer/>
    </>
  )
}

export default ContactUs