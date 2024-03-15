import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }: { itemsPerPage: number, totalItems: number, currentPage: number, paginate: (value: number) => void }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation example" className='m-auto'>
    <ul className="inline-flex -space-x-px text-base h-10">
      <li>
        <span onClick={() => paginate(currentPage - 1)} className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 font-bold">Previous</span>
      </li>
      {pageNumbers.map(number => (
        <li key={number}>
          <span onClick={() => paginate(number)} className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 font-bold ${currentPage === number ? 'text-cyan-600 border-cyan-300 bg-cyan-50 hover:bg-cyan-100 hover:text-cyan-700 ' : ''}`}>{number}</span>
        </li>
      ))}
      <li>
        <span onClick={() => paginate(currentPage + 1)} className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 font-bold">Next</span>
      </li>
    </ul>
  </nav>
  )
}

export default Pagination;
