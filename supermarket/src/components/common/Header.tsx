import React from "react";
import Image from 'next/image';
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 h-[60px] flex justify-between items-center px-4 py-2">
      <div className="container flex justify-between items-center px-4 py-2">
        {/* Add your logo and adjust the height and width according to your needs */}
        <Link href="/home" className="flex">
          SuperMarket
        </Link>        
      </div>
    </header>
  );
};

export default Header;
