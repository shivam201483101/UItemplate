import React from 'react'
import {Article,Brand,Feature,Cta,Navbar} from './components/index';
import {Blog,Feat,Footer,Header,Possibility,GPT3} from './container/index';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
     <Brand/>
     <GPT3/>
     <Feat/>
     <Possibility/>
     <Cta/>
     <Blog/>
     <Footer/>
    </div>
  )
}

export default App
