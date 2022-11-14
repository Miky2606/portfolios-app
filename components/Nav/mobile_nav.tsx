import Link from "next/link";
import { FC } from "react";
import { INav, nav } from "./const/nav.const";
export interface IMobile {
  active: Boolean;
}

const Mobile: FC<IMobile> = ({ active }): JSX.Element => {
  return (
    <div
      className={
        active
          ? `flex flex-col justify-center items-center
    bg-glass
     rounded-b m-2 -translate-y-2 border-none
     lg:hidden`
          : "hidden"
      }
    >
      {nav.map((e: INav) => (
        <Link
          href={e.link}
          className="m-2 bg-black-elegant  text-white p-2 
        rounded-full w-64 flex justify-center "
        >
          {e.title}
        </Link>
      ))}
    </div>
  );
};

export default Mobile;
