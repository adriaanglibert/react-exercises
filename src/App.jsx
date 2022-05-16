import { Delete, Dropdown, Home, NotFound } from './pages'
import { Route, Routes } from 'react-router-dom'

import React from 'react'

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/modal" element={<Delete/>} />
        <Route path="/dropdown" element={<Dropdown/>} />
        <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

export default App