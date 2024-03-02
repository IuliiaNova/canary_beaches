'use client'

import Image from "next/image"
import { getAllBeaches } from "@/api/beaches"
import { useEffect, useState } from "react"
import { ElaboradoData } from "@/models/beaches/beach.interface"

export const BeachItem = ({data}: {data: ElaboradoData }) => {

  console.log(data);
  

  return (

    <div className="bg-red-200">
      <div className="flex gap-2">
        <span className="font-semibold ">Playa name</span>
        <span className="">{data?.fecha?.nombre}</span>
      </div>
        
      <div>
        <div>
          <span>Cielo</span>
          <span>{data?.fecha?.prediccion?.dia[0].estadoCielo?.descripcion1}</span>
        </div>
        <div>
          <span>Icon</span>
          <span>Viento</span>
        </div>
      </div>
      <div>
        <span>Playa municipio</span>
      </div>
    </div>
  )
}
