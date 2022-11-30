import React from 'react'
import TopBar from './TopBar'
import "../assets/css/app.css"
import ContentRow from './ContentRow'
import Footer from './Footer'

const ContentWrapper = () => {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <TopBar/>
        <ContentRow/>
        <Footer/>
      </div>
    </div>
   
    
  )
}

export default ContentWrapper