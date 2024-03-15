import React from 'react'
import { BeachesList } from './components/BeachesList'
import { Filter } from './components/Filter'

export const BeachesPage = () => {

  const font = {
    fontFamily: 'Madimi One',
    fontWeight: 400,
    fontStyle: 'normal'
  }

  return (
    <div className='flex flex-col justify-start items-start gap-12'>
      <div className='m-auto'>
        <h1 className='text-customOrange text-5xl font-bold font-serif'>Explora las playas de Gran Canaria</h1>
        <span className='text-3xl text-customTerracotta'>Descubre tus rincones favoritos en las hermosas playas de la impresionante Isla de Gran Canaria</span>
      </div>
      <Filter />
      <BeachesList />
    </div>
  )
}
