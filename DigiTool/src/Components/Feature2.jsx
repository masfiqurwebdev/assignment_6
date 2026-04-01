import React from 'react'
import user from "../assets/user.png"

const Feature2 = () => {
  return (
    <div className='text-center '>
        <h1 className='text-5xl font-bold mb-6'>Get Started In 3 Steps</h1>
        <p className='text-[16px] text-[#627382] mb-10' >Start using premium digital tools in minutes, not hours.</p>

        <div>
            <div className='relative flex flex-col py-[24px]  bg-blue-200 w-[360px] '>
                <p className='linear-g-c absolute right-4 text-white text-center w-8 rounded-[50px]'>01</p>
                <img className='text-cen bg-violet-300 w-20 p-3 rounded-full ' src={user} alt="" />
                <h2>Create Account</h2>
                <p>Sign up for free in seconds. No credit card required to get started.</p>

            </div>
        </div>
    </div>
  )
}

export default Feature2
