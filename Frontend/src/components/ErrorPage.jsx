import React from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
    const navigate = useNavigate();
  return (
    <>
        <div className="h-screen flex flex-col items-center py-6">
            <div><img src="https://umino.bersky.co/media/wysiwyg/404.png" alt="" /></div>
            <div className="text-4xl font-semibold my-4">Oops...That link is broken.</div>
            <p className='text-2xl my-2'>Sorry for the inconvenience. Go to our homepage or check out our latest collections.</p>

            <div className="flex justify-center my-6">
                <button className='py-3 px-10 border bg-blue-400 text-white rounded-full' onClick={()=>navigate('')}>BACK TO HOMEPAGE</button>
            </div>
        </div>
    </>
  )
}

export default ErrorPage