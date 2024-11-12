import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Akash Mishra",
    image: assets.profile_pic,
    email: "mishraji@gmail.com",
    phone: '+91 8707972722',
    address: {
      line1: "Gorakhpur",
      line2: "Uttar Pradesh"
    },
    gender: "Male",
    dob: "2000-01-23",
  })
  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className='max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg flex flex-col gap-6 text-sm text-gray-700'>
      <div className="flex flex-col items-center">
        <img className='w-36 h-36 rounded-full border-4 border-blue-300 shadow-md' src={userData.image} alt="Profile" />
        {
          isEdit
            ? <input className='bg-gray-50 text-3xl font-semibold text-center mt-4 border-b-2 border-blue-400 focus:outline-none focus:border-blue-500' type='text' value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
            : <p className='font-semibold text-2xl text-neutral-800 mt-4'>{userData.name}</p>
        }
      </div>
      
      <hr className='border-t border-gray-300' />

      <div>
        <p className='text-gray-500 font-semibold underline mt-3'>Contact Information</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2 mt-3'>
          <p className='font-semibold'>Email:</p>
          <p className='text-blue-600'>{userData.email}</p>
          <p className='font-semibold'>Phone:</p>
          {
            isEdit
              ? <input className='bg-gray-100 rounded-md p-2' type='text' value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
              : <p className='text-blue-500'>{userData.phone}</p>
          }
          <p className='font-semibold'>Address:</p>
          {
            isEdit
              ? (
                <div>
                  <input className='bg-gray-50 rounded-md p-2 mt-1 w-full' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} type="text" />
                  <input className='bg-gray-50 rounded-md p-2 mt-1 w-full' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} type="text" />
                </div>
              )
              : <p className='text-gray-500'>{userData.address.line1}<br />{userData.address.line2}</p>
          }
        </div>
      </div>
      
      <div>
        <p className='text-gray-500 font-semibold underline mt-3'>Basic Information</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2 mt-3'>
          <p className='font-semibold'>Gender:</p>
          {
            isEdit
              ? (
                <select className='bg-gray-100 rounded-md p-2' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              )
              : <p className='text-gray-500'>{userData.gender}</p>
          }
          <p className='font-semibold'>Birthday:</p>
          {
            isEdit
              ? <input className='bg-gray-100 rounded-md p-2' type="date" onChange={(e)=>setUserData(prev=>({...prev,dob: e.target.value}))} value={userData.dob} />
              : <p className='text-gray-500'>{userData.dob}</p>
          }
        </div>
      </div>

      <div className='mt-8 text-center'>
        {
          isEdit
            ? <button className='bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition duration-200' onClick={()=>setIsEdit(false)}>Save Information</button>
            : <button className='bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition duration-200' onClick={()=>setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>
  )
}

export default MyProfile
