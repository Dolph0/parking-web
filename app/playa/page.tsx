import Footer from "@/components/Footer";
import Hero from "@/components/Playa/Hero"
import Download from "@/components/Playa/Download"
import Beaches from "@/components/Playa/Beaches"
import Fees from "@/components/Playa/Fees"
export default function Home() {
  return (
    <>
        <main className="w-screen min-h-screen">
            <Hero />
            <Download />
            <Beaches />
            <Fees />
        </main>
    </>
  );
}
