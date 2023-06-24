import Hero from "@/components/Hero";
import Rocket from "@/components/Rocket";
import World from "@/components/World";
import Free from "@/components/Free";
import Loud from "@/components/Loud";
import Search from "@/components/Search";
export default function Home() {
  return (
    <>
      <Hero />
      <Rocket />
      <World />
      {/* <Loud /> */}
      <Free />
      <Search />
    </>
  );
}
