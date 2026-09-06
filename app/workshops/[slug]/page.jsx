import { notFound } from "next/navigation";
import WorkshopDetail from "@/components/workshops/WorkshopDetail";
import { workshops } from "@/data/workshops";

export function generateStaticParams() {
  return workshops.map((workshop) => ({
    slug: workshop.slug,
  }));
}

export default async function WorkshopPage({ params }) {
  const { slug } = await params;

  const workshop = workshops.find((item) => item.slug === slug);

  if (!workshop) {
    notFound();
  }

  return <WorkshopDetail workshop={workshop} />;
}