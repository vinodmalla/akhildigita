import React from 'react';
import { GiRobotGolem } from 'react-icons/gi';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-8 m-[110px]">
      <h1 className="text-center md:text-left font-bold text-4xl md:text-5xl  p-4 md:p-6 max-w-xl leading-tight">
      Changing the world
        <br className="font-extrabold" />
        one app at a time
      </h1>
      <div className="text-blue-500 flex justify-center md:justify-start">
        <GiRobotGolem className="animate-pulse" size={200} />
      </div>
    </div>
  );
}
