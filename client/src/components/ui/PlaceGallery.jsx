import React, { useState } from 'react';
import { CgMenuGridO } from "react-icons/cg";

const PlaceGallery = ({ place }) => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  if (showAllPhotos) {
    return (
      <div className="fixed inset-0 z-20 overflow-auto bg-white text-white">
        <div className="grid gap-4 bg-white px-2 py-20 md:p-8">
          <div>
            <button
              className="fixed right-2 top-8 flex gap-1 rounded-2xl bg-white py-2 px-4 text-black shadow-sm shadow-gray-500 md:right-12"
              onClick={() => setShowAllPhotos(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
              Close photos
            </button>
          </div>
          {place?.photos?.length > 0 &&
            place.photos.map((photo, index) => (
              <div key={index} className="max-w-full">
                {/* <Image src={photo} /> */}
                <img src={photo} alt="" />
              </div>
            ))}
        </div>
      </div>
    );
  }
  return (
    <div className="relative">
      {/* Medium devices */}
      <div className="hidden h-[400px] max-h-[450px] grid-cols-4 gap-2 overflow-hidden rounded-[12px] md:grid">
        {/* column 1 */}
        <div className="col-span-2 overflow-hidden">
          {place.photos?.[0] && (
            <div className="h-full w-full overflow-hidden bg-red-200">
              <img
                onClick={() => setShowAllPhotos(true)}
                className="h-full w-full cursor-pointer object-cover"
                src={place.photos[0]}
                alt=""
              />
            </div>
          )}
        </div>
        {/* column 2 */}
        <div className="col-span-1 overflow-hidden">
          {/* row grid inside column 2 */}
          <div className="grid h-full grid-rows-2 gap-2">
            {place.photos?.[1] && (
              // row 1
              <div className="bg-gray-200">
                <img
                  onClick={() => setShowAllPhotos(true)}
                  className="h-full w-full cursor-pointer object-cover"
                  src={place.photos[1]}
                  alt=""
                />
              </div>
            )}

            {place.photos?.[2] && (
              // row 2
              <div className="bg-gray-200">
                <img
                  onClick={() => setShowAllPhotos(true)}
                  className="h-full w-full cursor-pointer object-cover"
                  src={place.photos[2]}
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
        {/* column 3 */}
        <div className="col-span-1 overflow-hidden">
          {/* row grid inside column 3 */}
          <div className="grid h-full grid-rows-2 gap-2">
            {place.photos?.[3] && (
              // row 1
              <div className="h-full bg-gray-200">
                <img
                  onClick={() => setShowAllPhotos(true)}
                  className="h-full w-full cursor-pointer object-cover"
                  src={place.photos[3]}
                  alt=""
                />
              </div>
            )}

            {place.photos?.[4] && (
              // row 2
              <div className="h-full bg-gray-200">
                <img
                  onClick={() => setShowAllPhotos(true)}
                  className="h-full w-full cursor-pointer object-cover"
                  src={place.photos[4]}
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile devices */}
      <div className="flex overflow-hidden rounded-[12px] md:hidden">
        {place.photos?.[0] && (
          <div className="h-full">
            <img
              onClick={() => setShowAllPhotos(true)}
              className="h-full cursor-pointer object-cover"
              src={place.photos[0]}
              alt=""
            />
          </div>
        )}
      </div>

      <button
        className="absolute bottom-2 right-2 hidden md:flex items-center gap-1 rounded-xl bg-white py-2 px-4 shadow-md shadow-gray-500 "
        onClick={() => setShowAllPhotos(true)}
      >
        <CgMenuGridO className='text-lg'/>
        Show all photos
      </button>
    </div>
  );
};

export default PlaceGallery;
