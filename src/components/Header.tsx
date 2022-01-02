import {
  SearchIcon
} from "@heroicons/react/outline"
import Image from "next/image";
import React from 'react';

function Header() {
  return (
    <div>
      <h1>header</h1>

      <div className="flex items-center">
        <Image 
          src="https://i.imgur.com/VgkNYXI.png"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600"/>
          <input className="flex ml-2 items-center bg-transparent outline-none border-none placeholder-gray-500" type="text" placeholder="Search Facebook" />
        </div>
      </div>

      {/* center */}

      {/* right */}
    </div>
  )
}

export default Header
