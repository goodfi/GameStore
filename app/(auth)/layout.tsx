import { Gamepad2 } from 'lucide-react';
import React, { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative flex min-h-screen">
      <div className=" w-[50%] hidden 2xl:block bg-auth-light bg-cover bg-center bg-no-repeat px-4 py-10 dark:bg-auth-dark"></div>
      <section className="flex justify-center items-center w-full 2xl:w-[50%] p-4">
        <div className="light-border background-light800_dark200 shadow-light100_dark100 min-w-full rounded-[10px] border-px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8 px-4">
          <div className="flexitems-center justify-between gap-2">
            <div className="space-y-2.5">
              <h1 className="h2-bold text-dark100_light900">Join GameStore</h1>
              <p className="paragraph-regular text-dark500_light400">
                To get all you need to plays games
              </p>
              <div className=" flex  gap-1 items-center">
                <Gamepad2 className="h-8 w-8 text-primary-500" />
                <h2 className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
                  <span className=" text-primary-500 ">Game</span>Store
                </h2>
              </div>
              {children}
              SocialAuthForm
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default layout;
