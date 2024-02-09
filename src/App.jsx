import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppRoutes from './utils/AppRoutes'
export const App = () => {
  let router = createBrowserRouter(AppRoutes)
  return <>
   <RouterProvider router={router}></RouterProvider>
  </>
}
