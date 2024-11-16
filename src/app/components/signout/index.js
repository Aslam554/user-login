"use client";
import { useRouter } from "next/router";
import { logoutAction } from "@/actions";

function Signout() {
  async function handleLogout() {
    await logoutAction();
  }

  return <button onClick={handleLogout} className="bg-yellow-400 px-2 rounded-lg hover:transition-all hover:scale-[1.04] duration-100 hover:border-white hover:border-2 h ">Logout</button>;
}

export default Signout;
