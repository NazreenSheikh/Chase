import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import Header from './components/Header'
import Coin from './pages/coin'
import Home from './pages/home'
import './App.css'

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: '#e3e3e3',
      // color: 'white',
      minHeight: '100vh',
    },
  }))

  const classes = useStyles()
  return (
    <div className={classes.App}>
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/coins/:id" component={Coin} />
      </Router>
    </div>
  )
}

export default App
