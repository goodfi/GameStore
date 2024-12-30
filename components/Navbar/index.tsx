// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Gamepad2, Heart, Menu, ShoppingBag, User } from 'lucide-react';
import Link from 'next/link';

import React from 'react';
import { ModeToggle } from './ModeToggle';
import { Button } from '../ui/button';

const Navbar = () => {
  return (
    <nav className=" background-light900_dark200 w-full  border-b-[1px]  border-light dark:border-dark-400  fixed top-0 left-0 z-50 ">
      {/* <div className="w-full flex-between">
        <p className="paragraph-regular primary-gradient w-full p-1 ">
          {' '}
          Promocja zimowa juz jest!!!
        </p>
      </div> */}
      <div className="flex-between gap-5 p-6 sm:px-12  ">
        <Link href="/" className="flex  gap-1 justify-center items-center">
          <Gamepad2 className="h-8 w-8 text-primary-500" />
          <h2 className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
            <span className=" text-primary-500 ">Game</span>Store
          </h2>
        </Link>
        <p>Global search</p>
        <div className="flex-between gap-5 ">
          <ModeToggle />
          {/* <User className="max-sm:hidden" /> */}
          <Heart />
          <ShoppingBag />
          <Menu className="max-sm:block hidden" />
          <Button className="btn primary-gradient">
            <Link href={'/sign-in'}>Zaloguj sie</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
