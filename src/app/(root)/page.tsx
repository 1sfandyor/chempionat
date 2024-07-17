import { Actions } from "@/components/Actions/Actions";
import { HomeSection } from "@/components/Home/HomeSection";

export default function Home() {
  return <main className="w-full text-black flex min-h-screen">
    <Actions/>
    <HomeSection/>
    </main>
}
