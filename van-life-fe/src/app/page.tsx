'use client';
import Image from "next/image";
import Header from "./components/Header";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";




export default function Home() {
  useEffect(()=>{
    AOS.init()
  },[]);
  return (
    <div>
      <div><Header/></div>
      <div className="relative mt-2">
        <video className="w-full object-cover brightness-50" src="/accets/hi.mp4" autoPlay loop muted/>
        <div className="absolute top-1/2   flex flex-col left-20 gap-y-4 " data-aos='fade-right' data-aos-duration='2000' >
          <div className="text-5xl font-black text-white ">You got the travel plans, we got the travel vans.</div>
          <div className="text-xl text-white">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</div>
          <div className="flex justify-center m-4"><a href="/van"><button type="submit" className=" p-3 text-3xl  rounded-lg text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium  px-5 py-2.5 text-center me-2 mb-2">Find Your Van</button></a></div>
          
          </div>
        </div>
      </div>
  );
}
