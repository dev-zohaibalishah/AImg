import React from 'react'

const ImagePreview = () => {
  return (
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl'>
      <div className='bg-zinc-600 shadow-lg rounded-xl overflow-hidden'>
        <h2 className='p-4'>Original Image</h2>
      </div>
      <div></div>
    </div>
  )
}

export default ImagePreview