import Image from "next/image"
import React, { useState } from 'react';

const sports = [
  { id: 1, icon: '/football.png', name: "Futboll" },
  { id: 2, icon: '/tennis.png', name: "Tennis" },
  { id: 3, icon: '/bassketball.png', name: "Basketball" },
  { id: 4, icon: '/volleyball.png', name: "Voleball" },
  { id: 5, icon: '/cs.png', name: "CS 2" },
  { id: 6, icon: '/table_tennis.png', name: "Table tennis" },
  { id: 7, icon: '/table_tennis.png', name: "Table tennis" },
  { id: 8, icon: '/table_tennis.png', name: "Table tennis" },
  
];


export const Search = () => {


  const [query, setQuery] = useState('');
  const [filteredSports, setFilteredSports] = useState(sports);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value.toLowerCase();
    setQuery(searchQuery);
    setFilteredSports(
      sports.filter((sport) =>
        sport.name.toLowerCase().includes(searchQuery)
      )
    );
  };


  return (
    <div className="bg-white flex px-2.5 min-h-[280px] w-full">
      <div className="flex items-start flex-col w-full">

      <div className="relative w-full flex-col">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input 
            value={query}
            onChange={handleSearch}
            type="search" 
            id="default-search" 
            className="block appearance-none w-full p-5 ps-14 text-sm text-black border-b border-b-grayBorder focus:outline-none" 
            placeholder="Search Mockups, Logos..."
            style={{width: '100%'}}
            required />
      </div>

      <ul className="flex flex-col items-start flex-wrap pt-3.5 px-6 pl-8 pb-10">
        <p className='text-[13px] text-[#8D8D8D] mb-[17px]'>Ключевые слова</p>
        <div className='flex items-center flex-wrap'>
        {filteredSports.map((sport) => (
          <li key={sport.id} className="flex  py-[7px] px-2.5 mr-0.5 mb-1 bg-[#F4F3F1] border-none rounded-[12px]">
            <Image className='mr-1 flex self-center' src={sport.icon} alt='' width={20} height={20}/>
            {sport.name}
          </li>
        ))}
        </div>
      </ul>
      </div>
    </div>
  )
}
