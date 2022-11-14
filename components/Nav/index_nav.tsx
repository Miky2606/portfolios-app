import { INav, nav } from "./const/nav.const";
import { AiOutlineMenu } from "react-icons/ai";
import Mobile from "./mobile_nav";
import { useState } from "react";
const Nav = (): JSX.Element => {
  const [active, setActive] = useState<Boolean>(false);
  return (
    <div>
      <div
        className={`flex 
    justify-between items-center
     m-2 p-3 bg-glass backdrop:blur-sm lg:rounded 
      ${active ? "rounded-t" : "rounded"} rounded-t  `}
      >
        <div>Logo</div>
        <ul className="hidden lg:flex p-2 space-x-3">
          {nav.map((e: INav) => (
            <li
              className={`
              bg-black-elegant
             text-white
              border-[0.5px]
              border-transparent
              hover:scale-110  
              hover:bg-white
              hover:border-black-elegant
             hover:text-black
              p-3  
              cursor-pointer
              transition-all
              ease
              duration-200
              rounded-full
              w-20 justify-center items-center flex  `}
            >
              {e.title}
            </li>
          ))}
        </ul>

        <button className="lg:hidden" onClick={() => setActive(!active)}>
          <AiOutlineMenu />
        </button>
      </div>
      <Mobile active={active} />
    </div>
  );
};

export default Nav;
