import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom'
// import { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
    pageSize=15;
state={
  progress:0
}

setProgress=(progress)=>{
  this.setState({progress:progress})
}

  render() {
    return (
    <>
      <Router>
     <Navbar/>
     <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
     <Routes>
      <Route path='/' element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general"/>}></Route>
      <Route path='/business' element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business"/>}></Route>
      <Route path='/entertainent' element={<News setProgress={this.setProgress} key="entertainent" pageSize={this.pageSize} country="in" category="entertainent"/>}></Route>
      <Route path='/' element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general"/>}></Route>
      <Route path='/health' element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health"/>}></Route>
      <Route path='/science' element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science"/>}></Route>
      <Route path='/sports' element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports"/>}></Route>
      <Route path='/technology' element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology"/>}></Route>
     </Routes>
     </Router>
    </>
    )
  }
}
