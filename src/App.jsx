import React from 'react'
import Home from './components/Home'

const App = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white py-8 px-4'>
        {/* Header */}
        <div className='text-center mb-8'>
          <h1 className='text-4xl font-bold text-gray-300 mb-2'>Ai Image Enhancer</h1>
          <p className='text-lg text-gray-400'>Enhance your images with AI</p>
        </div>

        <Home/>

        
        {/* Footer */}
        <div className='text-sm text-gray-400 mt-4'>
          Uplaod your Image and let AI enhance it in seconds!
        </div>
      </div>   
    </>
  )
}

export default App