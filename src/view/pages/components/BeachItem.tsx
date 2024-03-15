'use client'

import Image from "next/image"
import { BeachData, BeachI } from "@/models/beaches/beach.interface"
import { useEffect, useState } from "react"
import { getAllBeaches } from "@/api/beaches"

export const BeachItem = ({ dataBeach }: { dataBeach?: BeachI }) => {

  const [weather, setWeather] = useState<BeachData[] | undefined>()

  useEffect(() => {
    const fetchBeaches = async () => {
      const data = await getAllBeaches(dataBeach?.code ? dataBeach?.code : 3500101)
      setWeather(data)
    }
    fetchBeaches()
  }, [dataBeach?.code])

  // console.log(weather);

  return (
    <div>
      <div className="flex justify-between gap-2 text-2xl p-1">
        <span className="font-semibold">Playa name</span>
        <span className="">{dataBeach?.name}</span>
      </div>
      <div >
        <Image
          alt={`image-${dataBeach?.name}`}
          src={dataBeach?.img ? dataBeach?.img : 'https://www.grancanaria.com/turismo/fileadmin/diseno2014/img/playas/slider/Gran-Canaria-Amadores.JPG'}
          width={400}
          height={150}
          className="rounded-lg w-[350px] h-[200px] relative"
        />

        <div className="flex gap-2 text-xl w-fit px-3 rounded-full bg-slate-400 text-white absolute mt-[-40px] ml-2">
          <span>{dataBeach?.type}</span>
        </div>

        <div className="flex gap-2 text-xl w-fit px-3 rounded-full bg-slate-600 text-white absolute mt-[-80px] ml-2">
          {/* <span className="font-semibold">Cielo</span> */}
          {
            weather && weather.map((beach) => (
              <span key={beach.id}>{beach.prediccion.dia[0].estadoCielo.descripcion1}</span>
            ))
          }
        </div>
      </div>

      <div className="flex gap-2 text-xl">
        <span className="font-semibold">Playa</span>
        {
          weather && weather.map((beach) => (
            <span key={beach.id}>{beach.nombre}</span>
          ))
        }
      </div>
      <div className="flex gap-2 text-xl">
        <span className="font-semibold ">Municipio</span>
        <span>{dataBeach?.municipality}</span>
      </div>


      <div className="flex gap-2 text-xl">
        <span className="font-semibold ">Minusválidos</span>
        <span>{dataBeach?.disabledAccess}</span>
      </div>
    </div>

  )
}