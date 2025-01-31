import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { motion } from "framer-motion";

const SmallSearch = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 0); // Show when scrolling, hide at the very top
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="z-50 mr-48 lg:mr-0"
    >
      <div className="hidden md:flex cursor-pointer items-center gap-3 rounded-full border border-gray-300 px-4 py-2 text-sm bg-white shadow-md hover:shadow-lg">
        <div className="flex items-center gap-3">
          <p className="font-semibold">Anywhere</p>
          <div className="h-5 w-[1px] bg-gray-300"></div>
        </div>
        <div className="flex items-center gap-3">
          <p className="font-semibold">Any week</p>
          <div className="h-5 w-[1px] bg-gray-300"></div>
        </div>
        <div className="flex items-center gap-3">
          <p className="font-semibold text-gray-500">Add Guests</p>
          <div className="rounded-full bg-red-500 p-2 text-white">
            <IoSearch className="text-sm" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SmallSearch;
