"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// data collection import 
import MenuData from './MenuData';
import { usePathname } from 'next/navigation';

const Sidebar = () => {

  const pathName = usePathname();

  return (
    <aside className='sticky top-0 bottom-0 left-0  w-[100px] min-h-full border-r border-neutral-800'>
      <div className="w-full">
        <div className="w-full flex justify-center py-6">
          <Link href={'/'}>
            <Image priority src={'/assets/img/logo.svg'} width={45} height={45} alt='Логотип сайта openStudents' className='w-10 h-10' />
          </Link>
        </div>
        <nav className="w-full pt-12">
          <menu className="w-full flex flex-col items-center justify-center gap-1">
            {MenuData.map((item, index) => {
              return (
                <li key={index} className='inline-flex'>
                  <Link href={item.url} className={`${pathName === item.url ? 'opacity-100' : 'opacity-50'} text-white text-sm px-2 py-2 hover:opacity-100 transition-all flex flex-col items-center justify-center gap-2`}>
                    <item.icon width={18} height={18} />
                    <span className="text-sm text-center opacity-70">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </menu>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
