import React, { useState } from 'react';
import { motion } from 'framer-motion';

import axiosInstance from '@/utils/axios';
import { usePlaces } from '../../../hooks';
import { IoSearch } from "react-icons/io5";
import SmallSearch from './smallsearch';

const SearchBar = ({hasShadow}) => {
  const Places = usePlaces();
  const { setPlaces, setLoading } = Places;
  const [active, setActive] = useState('stay');

  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);

  const handleSearch = async (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    if (searchText.trimStart() !== '') {
      setLoading(true);
      setSearchTimeout(
        setTimeout(async () => {
          const { data } = await axiosInstance.get(
            `/places/search/${searchText.trimStart()}`,
          );
          setPlaces(data);
          setLoading(false);
        }, 500),
      );
    }
  };

  const handleToggle = (button) => {
    setActive(button);
  };

  const boxVariant = {
    visible: { opacity: 1, scale: 2 },
    hidden: { opacity: 0, scale: 0 },
  }

  return (
    <>
      {/* <div className="flex w-4/6 overflow-hidden rounded-full border border-gray-400 bg-gray-300 shadow-sm hover:shadow-lg md:w-1/2">
        <div className="grow">
          <input
            type="search"
            placeholder="Where you want to go?"
            className="h-full w-full border-none py-2 px-4 text-sm  focus:outline-none md:text-lg"
            onChange={(e) => handleSearch(e)}
            value={searchText}
          />
        </div>
        <div className="bg-blue flex cursor-pointer rounded-full  items-center bg-primary text-white">
          <button
            className="flex rounded-full bg-primary py-2 px-4 md:p-2"
            onClick={handleSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="mt-1 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </div> */}

      <div className={`absolute hidden md:flex flex-col gap-5 ${hasShadow ? 'pt-0' :'lg:pt-3 pt-16'}`}>
        {
          hasShadow ? (
            <SmallSearch/>            
          ) : (
            <>
              <div className='flex items-center justify-center gap-3 lg:gap-5 font-semibold'>
                <button
                  onClick={() => handleToggle('stay')}
                  className={`bg-transparent ${active == 'stay' ? 'text-black' : 'text-gray-500'}`}>
                  Stays
                </button>
                <button onClick={() => handleToggle('experience')}
                  className={`bg-transparent ${active == 'experience' ? 'text-black' : 'text-gray-500'}`}>
                  Experiences
                </button>
              </div>
              <div className='flex text-sm border-[1px] border-gray-400 rounded-full cursor-pointer shadow-md'>
                <div className='flex border-gray-300 hover:bg-gray-300 p-3 rounded-full pl-11 items-center gap-3 lg:gap-20 justify-between'>
                  <div className='flex flex-col'>
                    <p className='font-semibold'>Where</p>
                    <input className='text-[15px] placeholder:text-gray-600 bg-transparent focus:outline-none' placeholder='Search destinations'></input>
                  </div>
                  <div className='w-[1px] bg-gray-300 h-7'></div>
                </div>
                {
                  active == "stay" ? (
                    <>
                    <div className='flex pl-2 lg:pl-6 border-gray-300 hover:bg-gray-300 p-3 rounded-full items-center gap-3 lg:gap-8'>
                      <div className='flex flex-col'>
                        <p className='font-semibold'>Check in</p>
                        <p className='text-[15px] text-gray-600'>Add dates</p>
                      </div>
                      <div className='w-[1px] bg-gray-300 h-7'></div>
                    </div>
                    <div className='flex pl-2 lg:pl-6 border-gray-300 hover:bg-gray-300 p-3 rounded-full items-center gap-3 lg:gap-8'>
                      <div className='flex flex-col'>
                        <p className='font-semibold'>Check out</p>
                        <p className='text-[15px] text-gray-600'>Add dates</p>
                      </div>
                      <div className='w-[1px] bg-gray-300 h-7'></div>
                    </div>
                    </>
                  ):(
                    <div className='flex pl-3 lg:pl-6 border-gray-300 hover:bg-gray-300 p-3 rounded-full items-center gap-20 lg:gap-44'>
                      <div className='flex flex-col'>
                        <p className='font-semibold'>Date</p>
                        <p className='text-[15px] text-gray-600'>Add dates</p>
                      </div>
                      <div className='w-[1px] bg-gray-300 h-7'></div>
                    </div>
                  )

                }
                <div className='flex items-center pl-3 lg:pl-6 p-3 rounded-full hover:bg-gray-300 gap-10 lg:gap-20'>
                  <div className='flex flex-col'>
                    <p className='font-semibold'>Who</p>
                    <p className='text-[15px] text-gray-600'>Add Guests</p>
                  </div>
                  <div className='bg-primary text-white p-3 rounded-full'>
                    <IoSearch className='text-xl'/>
                  </div>
                </div>
              </div>
            </>
          )
        }
      </div>
    </>
  );
};

export default SearchBar;
