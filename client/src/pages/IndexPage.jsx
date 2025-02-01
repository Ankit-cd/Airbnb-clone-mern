import { usePlaces, useWishClick } from '../../hooks';
import Spinner from '@/components/ui/Spinner';
import PlaceCard from '@/components/ui/PlaceCard';
import SaveWishlist from '@/components/ui/SaveWishlist';
import IconSlider from '@/components/ui/IconSlider';
import { TfiPanel } from "react-icons/tfi";
const IndexPage = () => {
  const allPlaces = usePlaces();
  const { places, loading } = allPlaces;
  const {isWishOpen,setIsWishOpen,handleWishClick} = useWishClick();

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
    <div className='flex items-center mt-3'>
      <IconSlider/>
      <div className='flex gap-4 items-center'>
        <button className='bg-transparent text-xs font-semibold p-3 border-slate border-[1px] rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition'><TfiPanel className='text-base'/><span>Filters</span></button>
        <button className='bg-transparent text-xs font-semibold p-3 border-slate border-[1px] rounded-xl flex items-center justify-center hover:bg-gray-200 transition'>Display Total Before taxes</button>
      </div>
    </div>
    <div className="relative grid grid-cols-1 justify-items-center py-7 px-14 md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[4rem] xl:grid-cols-4 xl:gap-10">
      {places.length > 0 ? (
        places.map((place) => <PlaceCard handleWishClick = {handleWishClick} place={place} key={place._id} />)
      ) : (
        <div className="absolute left-1/2 right-1/2 top-40 flex  w-full -translate-x-1/2 transform flex-col p-10  md:w-1/2">
          <h1 className="text-3xl font-semibold">Result not found!</h1>
          <p className="text-lg font-semibold">
            Sorry, we couldn&#39;t find the place you&#39;re looking for.
          </p>
          <button className="mt-4 w-32 rounded-full bg-primary p-2 text-white">
            <a href="/" className="flex items-center justify-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-5 w-5"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Go back
            </a>
          </button>
        </div>
      )}

      {
        isWishOpen ? (
          <>
            
            <SaveWishlist handleWishClick ={handleWishClick}/>

          </>

        ) : null
      }
    </div>
    </>
  );
};

export default IndexPage;
