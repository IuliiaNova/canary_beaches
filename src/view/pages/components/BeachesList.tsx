'use client'

import { useEffect, useState } from "react"
import { BeachItem } from "./BeachItem"
import { getAllBeaches } from "@/api/beaches"
import { BeachI, ElaboradoData } from "@/models/beaches/beach.interface"
import playas from '../../../api/data/playas-grancanaria.json'
import Pagination from "./Pagination"

export const BeachesList = () => {

  // const [allBeaches, setAllBeaches] = useState<ElaboradoData[] | undefined>()

  // useEffect(() => {
  //   const fetchBeaches = async () => {
  //     const data = await getAllBeaches()
  //     setAllBeaches(data)
  //   }
  //   fetchBeaches()
  // }, [])

  // console.log('allBeaches', allBeaches);
  // console.log(playas);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = playas.playas.slice(indexOfFirstItem, indexOfLastItem);

  // Cambia de página
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="flex flex-row flex-wrap gap-8">

        {/* {allBeaches && allBeaches.map((playa) => (
          <BeachItem key={playa?.fecha?.id} dataTiempo={playa} />
          ))
        } */}

        {currentItems && currentItems.map((playa) => (
          <BeachItem key={playa?.name} dataBeach={playa as BeachI} />
          ))
        }
      </div>
      <span className="text-2xl font-semibold">Total: {playas.playas.length}</span>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={playas.playas.length}
        currentPage={currentPage}
        paginate={paginate}
        />
    </>
  )
}
