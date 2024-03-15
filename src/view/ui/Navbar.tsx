import { MdOutlineBeachAccess } from "react-icons/md"
import { DropdownButtonMenu } from "./DropdownButtonMenu"
import Link from "next/link"

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

    <nav className="border-gray-200 bg-customBlueGreen px-8">
      <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex gap-2 items-center">
          <span><MdOutlineBeachAccess fill={'#1d4e89'} size={30} /></span>
          <span className="self-center text-2xl font-bold whitespace-nowrap text-customDarkBlue">PLAYAS CANARIAS </span>
        </Link>

        <ul className="font-medium flex flex-row gap-16 items-center p-4 md:p-0 mt-4">
          <Link href={'/'}>
            <DropdownButtonMenu btmLabel={'Municipios'} dropDownContent={dropDownContentMunicipalities}/>
          </Link>
          <Link href={'/'}>
            <DropdownButtonMenu btmLabel={'Caracteristicas'} dropDownContent={dropDownContentCaracteristicas}/>
          </Link>
        
        </ul>
      </div>
    </nav>
  )
}