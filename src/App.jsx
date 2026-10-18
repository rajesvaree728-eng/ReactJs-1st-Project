import React from 'react'
import Header from './compo/Header'
import Middle from './compo/middle'
import Footer from './compo/footer'
import Login from './compo/Login'

const App = () => {
  return (
    <div className='page'>
      <h1>profile Dashboard</h1>
      <Login />
      <Header name="Code unfiltered" />
      <Middle/>
      <Footer/>
    </div>
  )
}

export default App
