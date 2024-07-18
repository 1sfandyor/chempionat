import { Actions } from "@/components/Actions/Actions";
import { HomeSection } from "@/components/Home/HomeSection";

export default function Home() {
  return <main className="w-full overflow-y-hidden text-black flex h-screen">
    <Actions/>
    <HomeSection/>
    </main>
}
