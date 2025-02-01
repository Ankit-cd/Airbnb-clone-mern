import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoHeartFill } from "react-icons/go";
import { MdOutlineStar } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/index.js';
import ImageSlider from './ImageSlider.jsx';
const PlaceCard = ({ place,handleWishClick }) => {
  const { _id: placeId, photos, address, title, price } = place;
  const auth = useAuth();
  const navigate = useNavigate();
  return (
    <div className='relative'>
      <Link to={`/place/${placeId}`} className="m-4 flex flex-col md:m-2 xl:m-0">
        <div className="card px-3 mr-2 w-full">
          {photos?.[0] && (
            <div className='h-4/5 relative'>
              <ImageSlider photos={photos} />
            </div>
          )}
          <div className='flex justify-between items-baseline pt-3'>
            <div>
              <h2 className="truncate font-bold">{address}</h2>
              <h3 className="truncate text-sm text-gray-500">{title}</h3>
              <div className="mt-1">
                <span className="font-semibold">₹{price}/ </span>
                night
              </div>
            </div>
            <span className='flex items-center text-sm gap-1'><MdOutlineStar/> New</span>
          </div>
        </div>
      </Link>
      <GoHeartFill onClick={handleWishClick} className='absolute z-[6] top-9 right-12 xl:top-5 xl:right-10 text-xl text-black/50 hover:scale-105 stroke-white stroke-[1.5px]'/>
    </div>
  );
};

export default PlaceCard;
