'use client'

import Image from "next/image"
import { getAllBeaches } from "@/api/beaches"
import { useEffect, useState } from "react"

export const BeachItem = () => {

  const [test, setTest] = useState()
  console.log('test', test);


  useEffect(() => {
    const text = async () => {
      const test = await getAllBeaches()
      setTest(test)
    }
    text()
  }, [])




  return (
    <div>
      <div>
        {/* <Image alt="playa foto" src={''} /> */}
        <div>
          <span>Icon</span>
          <span>Temperatura</span>
        </div>
        <div>
          <span>Icon</span>
          <span>Viento</span>
        </div>

      </div>
      <div>
        <span className="font-semibold">Playa name</span>
        <span>Playa municipio</span>
      </div>
    </div>
  )
}
