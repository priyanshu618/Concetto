import Hero from "@/components/workshops/Hero";
import WorkshopTracks from "@/components/workshops/WorkshopTracks";
import RegisterCTA from "@/components/workshops/RegisterCTA";
import { workshops } from "@/data/workshops";

export default function WorkshopsPage() {
  return (
    <main className="min-h-screen bg-(--background)">
      <Hero />
      <WorkshopTracks workshops={workshops} />
      <RegisterCTA />
    </main>
  );
}