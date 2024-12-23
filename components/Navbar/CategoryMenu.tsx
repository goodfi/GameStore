import { CategoryConst } from '@/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

interface Props {
  ClassName?: string;
}

const CategoryMenu = ({ ClassName }: Props) => {
  return (
    <div
      className={cn(
        ClassName,
        'max-2xl:flex-between border-b-[1px]  border-light dark:border-dark-400 py-1  sm:px-4  background-light900_dark200'
      )}
    >
      {CategoryConst.map((item) => (
        <Link
          href={item.href}
          key={item.href}
          className="flex items-center justify-center  w-full gap-4 bg-transparent p-4 hover:primary-gradient hover:rounded-lg hover:text-light-900 overflow-hidden "
        >
          {item.icon}
          <p className="truncate ">{item.Title}</p>
        </Link>
      ))}
    </div>
  );
};

export default CategoryMenu;
