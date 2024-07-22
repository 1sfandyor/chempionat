'use client'
import Offer from "@/app/(root)/offer/page";
import { Actions } from "@/components/Actions/Actions";
import { HomeSectionWrapper } from "@/components/Home/HomeSection";
import { usePathname } from 'next/navigation';

export default function Main() {

  return (
    <main className="w-full overflow-y-hidden text-black flex h-screen">
      <Actions /> 
      <HomeSectionWrapper />
    </main>
  );
}