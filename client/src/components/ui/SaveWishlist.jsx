import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';

const SaveWishlist = ({handleWishClick}) => {
    const [inputValue, setInputValue] = useState("OMG!");
    const [character,setCharacter] = useState(inputValue.length);

    const handleCreateWishlist = () =>{
        Swal.fire({
            title: "Added to Wishlist ✌",
            icon: "success"
          });
    }
  return (
    <motion.div
        initial={{ scale: 0 ,opacity: 0}}
        animate={{ scale:1,opacity: 1 }}
        className='bg-white rounded-xl flex flex-col absolute top-2 border-[1px] w-full md:w-[400px] shadow-2xl'>
        
        <div className='flex items-center gap-28 border-b-[1px] p-3'>
            <RxCross2 onClick={handleWishClick} className='text-xl'/>
           
            <h1 className='text-lg font-semibold text-left'>Create Wishlist</h1>
        </div>
        <div className='p-4 border-b-[1px]'>
            <div class="relative">
                <input value={inputValue} onChange={(e) =>{setCharacter(e.target.value.length);
                    setInputValue(e.target.value)
                }} type="text" id="small_outlined" maxLength={50} class="block px-0 pb-1 pt-2 w-full h-[50px] text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-2 focus:ring-0 focus:border-black-600 peer" placeholder=" " />
                <label for="small_outlined" class="absolute bg-transparent text-sm text-gray-500 duration-300 transform -translate-y-1 scale-50 top-1 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-black-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-0 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Name</label>
            </div>

            <span className='text-[12px] text-slate-500'>{character}/50 characters</span>        
        </div>

        <div className='flex justify-between mb-3 p-3'>
            <button onClick={() => {setInputValue(""),setCharacter(0)}} className='py-2  px-3 font-semibold rounded-md bg-transparent hover:bg-gray-200'>Clear</button>
            <button disabled={inputValue===''} onClick={handleCreateWishlist} className={`${character ? ' bg-black text-white':'bg-gray-200 text-gray-500'} py-2 px-3 font-semibold rounded-md`}>Create</button>
        </div>      
    </motion.div>
  )
}

export default SaveWishlist
