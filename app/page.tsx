import Image from "next/image";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-full h-screen bg-cyan-950 px-4">
      <Sidebar/>
      <Hero/>
      
    
    </main>
  );
}
