'use client'
import Offer from "@/app/(root)/offer/page";
import { Actions } from "@/components/Actions/Actions";
import { HomeSectionWrapper } from "@/components/Home/HomeSection";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Main() {
  const router = useRouter()

  useEffect(() => {
    router.push('/?tab=reels')
  }, [router]);

  return (
    <main className="w-full overflow-y-hidden text-black flex h-screen">
      <Actions /> 
      <HomeSectionWrapper />
    </main>
  );
}