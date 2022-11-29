import React from 'react'
import Banner from './Banner'
import Footer from './Footer'
import Header from './Header'
import Productos from './Productos'


const Web = () => {
  return (
    <div className='container'>
        <Header />
        <Banner />
        <Productos />
        <Footer />
    </div>
  )
}

export default Web