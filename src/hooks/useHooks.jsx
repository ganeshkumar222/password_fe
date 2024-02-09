import React from 'react'
import { useNavigate } from 'react-router-dom'

export const useHooks = () => {
    let navigate = useNavigate()
  return ()=>{
    sessionStorage.clear()
    navigate("/")
  }
}
