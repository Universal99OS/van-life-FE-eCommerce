'use client';
import Image from "next/image";
import Header from "./components/Header";



export default function Home() {
  return (
    <div>
      <div><Header/></div>
      <div className="relative">
        <video className="w-full" src="/accets/hi.mp4" autoPlay loop muted/>
        <div className="absolute right-0 bottom-0"><button type="submit">Van</button></div>
        </div>
      </div>
  );
}
