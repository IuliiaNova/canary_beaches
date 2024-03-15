import React from 'react'

export const Filter = () => {
  return (

    <form className="">
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-6 h-6 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input type="search" id="default-search" className="block w-[700px] p-4 ps-12 text-xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50  focus:border-customOrange " placeholder="Buscar playa..." required />
        {/* <button type="submit" className="text-white absolute end-[1px] bottom-[1px] bg-customBlue hover:bg-customDarkBlue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-8 py-4  ">Search</button> */}
      </div>
    </form>

  )
}
