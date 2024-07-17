import { Actions } from "@/components/Actions/Actions";
import { HomeSection } from "@/components/Home/HomeSection";

export default function Home() {
  return <main className="w-full text-black flex bg-red-300 min-h-screen pt-[19px]">
    <Actions/>
    <HomeSection/>
    </main>
}
