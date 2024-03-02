'use client'

import { useEffect, useState } from "react"
import { BeachItem } from "./BeachItem"
import { getAllBeaches } from "@/api/beaches"
import { ElaboradoData } from "@/models/beaches/beach.interface"

export const BeachesList = () => {

  const [allBeaches, setAllBeaches] = useState<ElaboradoData[] | undefined>()
  
  useEffect(() => {
    const fetchBeaches = async () => {
      const data = await getAllBeaches()
      setAllBeaches(data)
    }
    fetchBeaches()
  }, [])
  
  console.log('allBeaches', allBeaches);


  return (
    <div className="flex flex-row gap-8">

      {allBeaches && allBeaches.map((playa) => (
        <BeachItem key={playa?.fecha?.id} data={playa} />
      )) 
      } 

    </div>
  )
}
