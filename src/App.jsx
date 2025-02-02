import { React, useState } from 'react'
import HomeLayout from './Components/home/HomeLayout'
import ProfileLayout from './Components/profile/ProfileLayout'
import SkillsLayout from './Components/skills/SkillsLayout'
import PortoLayout from './Components/porto/PortoLayout'
import ContactLayout from './Components/contact/ContactLayout'
import NavbarLayout from './Components/navbar/NavbarLayout'

function App() {

  return (
    <>
    <NavbarLayout/>
    <HomeLayout/>
    <ProfileLayout/>
    <SkillsLayout/>
    <PortoLayout/>
    <ContactLayout/>
    </>
  )
}

export default App
