import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axiosInstance from '@/utils/axios';

import Spinner from '@/components/ui/Spinner';
import AddressLink from '@/components/ui/AddressLink';
import BookingWidget from '@/components/ui/BookingWidget';
import PlaceGallery from '@/components/ui/PlaceGallery';
import PerksWidget from '@/components/ui/PerksWidget';
import { IoShareOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineStar } from "react-icons/md";
import ShareBox from '@/components/ui/ShareBox';
import { useWishClick } from '../../hooks/index';
import SaveWishlist from '@/components/ui/SaveWishlist';

const PlacePage = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isopen, setIsOpen] = useState(false);
  const {isWishOpen,setIsWishOpen,handleWishClick} = useWishClick();



  const handleClick = () =>{
    setIsOpen(!isopen);
  }

  useEffect(() => {
    if (!id) {
      return '';
    }

    setLoading(true);

    const getPlace = async () => {
      const { data } = await axiosInstance.get(`/places/${id}`);
      setPlace(data.place);
      setLoading(false);
    };
    getPlace();
  }, [id]);

  // if (loading) {
  //   return <Spinner />;
  // }

  if (!place) {
    return;
  }

  return (
    <div className="relative mt-4 overflow-x-hidden px-16">
      <div className='flex justify-between items-start md:items-center flex-col md:flex-row'>
        <h1 className="text-3xl pb-2">{place.title}</h1>
        <div className='hidden md:flex gap-4'>
          <span onClick={handleClick} className='flex items-center gap-1 rounded-md px-2 py-1 hover:bg-gray-200'><IoShareOutline /> <p className='underline'>share</p></span>
          <span onClick={handleWishClick} className='flex items-center gap-1 rounded-md px-2 py-1 hover:bg-gray-200'><IoIosHeartEmpty /> <p className='underline'>save</p></span>
        </div>
      </div>

      
      <PlaceGallery place={place} />
      <AddressLink placeAddress={place.address} />
      <span className='text-sm'>{place.maxGuests} guests . {" "} bedrooms . {" "} beds . {" "} bathrooms</span>
      <span className='flex items-center text-base gap-1 font-semibold -ml-1'><MdOutlineStar className='text-lg' /> <p className='underline'>reviews</p></span>
      <div className="mt-3 mb-8 grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr]">
        <div className="">
          <div className="my-0 ">
            <h2 className="text-2xl font-semibold">Description</h2>
            {place.description}
          </div>
          <PerksWidget perks={place?.perks} />
        </div>
        <div>
          <BookingWidget place={place} />
        </div>
      </div>
      <div className="-mx-8 border-t bg-white px-8 py-8">
        <div>
          <h2 className="mt-4 text-2xl font-semibold">Extra Info</h2>
        </div>
        <div className="mb-4 mt-2 text-sm leading-5 text-gray-700">
          {place.extraInfo}
        </div>
      </div>

      {
        isopen ? (

            <ShareBox place={place} handleClick ={handleClick}/>
        ) : null
      }
      {
        isWishOpen ? (
          <div className='flex items-center justify-center mx-3'>
            
            <SaveWishlist handleWishClick ={handleWishClick}/>

          </div>

        ) : null
      }
    </div>
  );
};

export default PlacePage;
