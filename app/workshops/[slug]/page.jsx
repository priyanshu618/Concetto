import { notFound } from "next/navigation";

import WorkshopDetail from "@/components/workshops/WorkshopDetail";
import RegistrationDetails from "@/components/workshops/RegistrationDetails";
import Benefits from "@/components/workshops/Benefits";
import SpecialOffer from "@/components/workshops/SpecialOffer";
import Facilities from "@/components/workshops/Facilities";
import RegisterCTA from "@/components/workshops/RegisterCTA";

import {
  workshops,
  workshopInfo,
  registration,
  workshopBenefits,
  specialOffer,
  workshopFacilities,
  contact,
} from "@/data/workshops";

export function generateStaticParams() {
  return workshops.map((workshop) => ({
    slug: workshop.slug,
  }));
}

export default async function WorkshopPage({ params }) {
  const { slug } = await params;

  const workshop = workshops.find(
    (item) => item.slug === slug
  );

  if (!workshop) {
    notFound();
  }

  return (
    <>
      <WorkshopDetail
        workshop={workshop}
        info={workshopInfo}
      />

      <RegistrationDetails
        info={workshopInfo}
        registration={registration}
      />

      <Benefits benefits={workshopBenefits} />

      <SpecialOffer offer={specialOffer} />

      <Facilities facilities={workshopFacilities} />
    </>
  );
}