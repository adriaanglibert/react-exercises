import { DropdownPage, Home, ModalPage, NotFound } from './pages'
import { Route, Routes } from 'react-router-dom'

import BaseLayout from './layouts/BaseLayout';
import Cannabis from './pages/Cannabis';
import DrugPage from './pages/DrugPage';
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
          <Route path={ROUTES.DRUGS}>
            <Route index element={<Cannabis/>} />
            <Route path={ROUTES.DRUG} element={<DrugPage/>} />
          </Route>x
          <Route path={ROUTES.MODAL} element={<ModalPage/>} />
          <Route path={ROUTES.DROPDOWN} element={<DropdownPage/>} />
        </Route>

        <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

export default App