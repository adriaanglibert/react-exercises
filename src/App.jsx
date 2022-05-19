import { DropdownPage, Home, ModalPage, NotFound } from './pages'
import { Route, Routes } from 'react-router-dom'

import BaseLayout from './layouts/BaseLayout';
import GridLayout from './layouts/SidebarLayout';
import PostPage from './pages/PostPage';
import ROUTES from './routes';
import React from 'react'

const App = () => {
  return (
    <Routes>
        <Route path={ROUTES.BASE} element={<BaseLayout/>}>
          <Route element={<GridLayout title="Posts"/>}>
            <Route index element={<Home/>} />
            <Route path={ROUTES.POST} element={<PostPage/>} />
          </Route>
          <Route path={ROUTES.MODAL} element={<ModalPage/>} />
          <Route path={ROUTES.DROPDOWN} element={<DropdownPage/>} />
        </Route>

        <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

export default App