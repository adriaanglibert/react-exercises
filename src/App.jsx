import { DropdownPage, Home, ModalPage, NotFound } from './pages'
import { Route, Routes } from 'react-router-dom'

import BaseLayout from './layouts/BaseLayout';
import ROUTES from './routes';
import React from 'react'

const App = () => {
  return (
    <Routes>
        <Route path={ROUTES.BASE} element={<BaseLayout/>}>
          <Route index element={<Home/>} />
          <Route path={ROUTES.MODAL} element={<ModalPage/>} />
          <Route path={ROUTES.DROPDOWN} element={<DropdownPage/>} />
          <Route path="*" element={<NotFound/>} />
        </Route>
    </Routes>
  )
}

export default App