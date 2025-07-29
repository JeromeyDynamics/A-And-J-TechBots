//using "rafce", a basic component with a div can be generated
import { headerData } from '@/constants';
import Link from 'next/link';
import React from 'react';
import "../app/globals.css";

const HeaderMenu = () => {
  return (
    <div className="flex w-1/3 items-center gap-5 text-sm capitalize font-semibold">
      {headerData.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="hover:text-dark hover-effect relative group"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}

export default HeaderMenu;