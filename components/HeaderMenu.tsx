"use client";
import { headerData } from '@/constants';
import Link from 'next/link';
import React from 'react';
import "../app/globals.css";
import { usePathname } from 'next/navigation';

const HeaderMenu = () => {
  //shows the path that we are in which shows the page we are on
  const pathName = usePathname();

  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-5 text-sm capitalize font-semibold">
      {headerData.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          //made with {`text`} because we want to use conditionals
          className={`hover:text-dark hover-effect relative group ${
            //keeps the text dark if the link at the top is the page that we are currently on
            pathName === item.href && "text-dark"
          }`}
        >
          {item.title}
          <span
            className = {`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-dark hover-effect group-hover:w-1/2 group-hover:left-0 ${
              //keeps the line out if the link at the top is the page that we are currently on
              pathName === item.href && "w-1/2"
            }`} 
          />
          <span
            className = {`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-dark hover-effect group-hover:w-1/2 group-hover:right-0 ${
              //keeps the line out if the link at the top is the page that we are currently on
              pathName === item.href && "w-1/2"
            }`}
          />
        </Link>
      ))}
    </div>
  );
}

export default HeaderMenu;