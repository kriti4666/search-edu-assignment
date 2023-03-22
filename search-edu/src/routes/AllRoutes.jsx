import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { FormRoute } from './FormRoute'
import { NotFound } from './NotFound'
import { UserRoute } from './UserRoute'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<FormRoute/>}/>
        <Route path='/user' element={<UserRoute/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}
