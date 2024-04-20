import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <div>
      <div className='w-full text-white'>
        <img className='w-full h-[400px] object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='' />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className=' text-3xl md:text text-5xl font-bold'>My Shows</h1>

        </div>
      </div>
      <SavedShows />
    </div>
  )
}

export default Account