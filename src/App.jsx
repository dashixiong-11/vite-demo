import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useEffect } from 'react';
import { showLoading,hideLoading } from '../until/loading'; 
import { useShowModel } from './hooks/useShowModel/useShowModel';
import './App.css'
function App() {
  const {remove,portal} = useShowModel()
  
  const onClick = () => {
    showLoading()
  }
  const h =() => {
    console.log('hhh');
    hideLoading()
  } 
  const showModel = () => {
    portal()
  }


  return (
    <>
      <div>
        <button onClick={onClick}> show </button>
        <button onClick={h}> hide </button>
    <button onClick={showModel}>show model</button>
      </div>
    </>
  )
}

export default App
