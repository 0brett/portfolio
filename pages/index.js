import React from 'react'

import Head from '../components/Head'
import Nav from '../components/Nav'
import Body from '../components/Body'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="main">
      <Head title="Brett Flora • Engineer" />
      <Nav />
      <Body />
      <Footer />
    </div>
  )
}

export default Home
