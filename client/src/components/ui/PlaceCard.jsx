import React from 'react';
import { Link } from 'react-router-dom';
import { GoHeartFill } from "react-icons/go";
import { MdOutlineStar } from "react-icons/md";
const PlaceCard = ({ place }) => {
  const { _id: placeId, photos, address, title, price } = place;
  return (
    <div className=''>
      <Link to={`/place/${placeId}`} className="m-4 flex flex-col md:m-2 xl:m-0">
        <div className="card px-3 mr-2 w-full">
          {photos?.[0] && (
            <div className='h-4/5 relative'>
              <img
              src={`${photos?.[0]}`}
              className="w-full h-full rounded-xl object-cover"
            />
            <GoHeartFill className='absolute top-5 right-5 text-xl text-black/50 hover:scale-105 stroke-white stroke-[1.5px]'/>
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
    </div>
  );
};

export default PlaceCard;
