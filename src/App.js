import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayOut from './components/RootLayOut'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayOut />}>

      </Route>
    </Routes>
  )
}

export default App
