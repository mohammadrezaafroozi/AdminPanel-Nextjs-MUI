import Dashboard from "@/pages/dashboard";
import Login from "@/components/Login";
import { useSession } from "next-auth/react";
import scss from "../components/Layout/Layout.module.scss";
import React from "react";

const Home: React.FC = () => {
  const { data: session } = useSession();

  return (
    <main className="py-0 px-[24px] min-w-[1700px] max-w-[85rem] m-auto">
      {session && <Dashboard />}
      {!session && <Login />}
    </main>
  );
};

export default Home;

 