"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import ServicesSec from "@/components/ServicesSec";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { LampDemo } from "@/components/ui/lamp";
import Articles from "@/components/Articles";

const Home = () => {
  const pathname = usePathname();

  useEffect(() => {
    const handleHashChange = () => {
      console.log("Hash changed:", window.location.hash);
      // Perform any necessary actions here
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname]);

  return (
    <main className="relative bg-slate-950 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={navItems} /> */}
        <Hero />
        <ServicesSec />
        <Grid />
        {/* 
        <RecentProjects />*/}
        <Clients />

        <Approach />
        <Articles />

        <Footer />
      </div>
    </main>
  );
};

export default Home;
