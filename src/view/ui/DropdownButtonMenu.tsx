'use client'

import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"

interface DropDownContent {
  name: string,
  number_beaches: number
}

export const DropdownButtonMenu = ({ btmLabel, dropDownContent }: { btmLabel: string, dropDownContent: DropDownContent[] }) => {

  const [isHover, setIsHover] = useState(false)

  const handleClick = () => {
    setIsHover(!isHover)
  }

  const handleMouseEnter = () => {
    setIsHover(true)
  }

  const handleMouseLeave = () => {
    setIsHover(false)
  }



  return (
    <div
      className="relative "
      onClick={handleClick}
    >
      <button
        className="text-white hover:text-blue-100 font-semibold rounded-lg text-lg px-5 py-2.5 flex gap-2 text-center items-center "
        type="button"
      >
        <span>{btmLabel}</span>
        <span className="mt-[1px]"><IoIosArrowDown /></span>
      </button>
      {
        isHover && (
          <div className="z-10 rounded-lg shadow w-56 mt-4 bg-gray-200 absolute">
            <ul className="py-2 text-sm text-gray-700 d" aria-labelledby="dropdownHoverButton">
              {
                dropDownContent && dropDownContent.map((content, index) => (
                  <li key={index}>
                    <a href="#" className="flex gap-2 px-4 py-2 hover:bg-customLightBlue ">
                      <span className="text-customDarkBlue">{content.name}</span>
                      <span className="text-black bg-gray-300 rounded-full px-2 ">{content.number_beaches} playas</span>
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
        )
      }
    </div>
  )
}