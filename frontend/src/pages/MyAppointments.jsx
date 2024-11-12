import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointments = () => {
  const { doctors } = useContext(AppContext)

  return (
    <div className='max-w-3xl mx-auto p-6'>
      <p className='text-2xl font-semibold text-gray-800 mb-6'>My Appointments</p>
      <div className='space-y-6'>
        {doctors.slice(0, 3).map((item, index) => (
          <div key={index} className='flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-5 md:p-6 space-y-4 md:space-y-0 md:space-x-6'>
            <div className='flex-shrink-0'>
              <img className='w-24 h-24 rounded-full object-cover' src={item.image} alt={item.name} />
            </div>
            <div className='flex-grow'>
              <p className='text-xl font-semibold text-gray-800'>{item.name}</p>
              <p className='text-sm text-gray-500'>{item.speciality}</p>
              <p className='mt-2 font-medium text-gray-600'>Address:</p>
              <p className='text-sm text-gray-500'>{item.address.line1}</p>
              <p className='text-sm text-gray-500'>{item.address.line2}</p>
              <p className='mt-2 text-sm text-gray-500'><span className='font-medium'>Date & Time:</span> 25, July, 2024 | 8:30 PM</p>
            </div>
            <div className='flex flex-col space-y-2'>
              <button className='bg-blue-500 text-white py-2 px-4 rounded-full font-medium hover:bg-blue-800 transition duration-200'>Pay Online</button>
              <button className='bg-red-500 text-white py-2 px-4 rounded-full font-medium hover:bg-red-600 transition duration-200'>Cancel Appointment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointments
