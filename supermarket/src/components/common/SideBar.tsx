import useAppContext from "@/context";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FiHome, FiUsers, FiShoppingBag, FiLogOut } from "react-icons/fi";

const SideBar = () => {
  const styleLink = "relative group flex items-center p-2 text-black bg-white   hover:sm:invert"
  const styleSpan = "hidden ml-3 p-2 font-medium sm:block group-hover:sm:static group-hover:sm:bg-transparent   group-hover:block group-hover:absolute group-hover:top-0 group-hover:left-7 group-hover:bg-white group-hover:p-2 group-hover:rounded-md "

  const router = useRouter()
  const { user, setUser } = useAppContext()
  return (
    <aside className=" flex flex-col items-center justify-start pt-6 h-100% w-full  ">
      <nav className=" flex flex-col w-full">
        <Link
          href="/home"
          className={styleLink}
        >
          <FiHome size={24} />
          <span className={styleSpan}>Home</span>
        </Link>
        <Link
          href="/clients"
          className={styleLink}
        >
          <FiUsers size={24} />
          <span className={styleSpan}>Clientes</span>
        </Link>
        {
          /*
          <Link
            href="/item"
            className={styleLink}
          >
            <FiShoppingBag size={24} />
            <span className={styleSpan}>Items</span>
          </Link>
        */
        }
        <Link
          href="/login"
          onClick={() => {
            setUser(null)
          }}
          className={styleLink}
        >
          <FiLogOut size={24} />
          <span className={styleSpan}>Logout</span>
        </Link>
      </nav>
    </aside>
  );
};

export default SideBar;
