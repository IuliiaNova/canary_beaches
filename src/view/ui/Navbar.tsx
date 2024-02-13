import { MdOutlineBeachAccess } from "react-icons/md"
import { DropdownButtonMenu } from "./DropdownButtonMenu"

export const Navbar = () => {

  const dropDownContentMunicipalities = [
    {
      name: 'Las Palmas',
      number_beaches: 4
    },
    {
      name: 'Arucas',
      number_beaches: 2
    },
    {
      name: 'Telde',
      number_beaches: 3
    },
    {
      name: 'Agaete',
      number_beaches: 3
    },
    {
      name: 'Maspalomas',
      number_beaches: 4
    }
  ]

  const dropDownContentCaracteristicas = [
    {
      name: 'Assesible',
      number_beaches: 4
    },
    {
      name: 'Bandera azul',
      number_beaches: 2
    },
    {
      name: 'Nudista',
      number_beaches: 3
    },
    {
      name: 'Paseo maritima',
      number_beaches: 5
    }
  ]

  return (

    <nav className=" border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex gap-2 items-center">
          <span><MdOutlineBeachAccess fill={'white'} size={30} /></span>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Playas canarias</span>
        </a>
        <ul className="font-medium flex flex-col gap-16 items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <DropdownButtonMenu btmLabel={'Municipios'} dropDownContent={dropDownContentMunicipalities}/>
          </li>
          <li>
            <DropdownButtonMenu btmLabel={'Caracteristicas'} dropDownContent={dropDownContentCaracteristicas}/>
          </li>
          <li>
            <a href="#"
              className=" py-2 pl-3 pr-4 text-gray-900 text-lg rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Todos las plays</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}