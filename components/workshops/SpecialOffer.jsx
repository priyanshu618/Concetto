import { Users } from "lucide-react";

export default function SpecialOffer({ offer }) {
  return (
    <section className="px-5 py-8 md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="relative overflow-hidden rounded-2xl bg-(--primary) p-6 md:p-8">
          <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

          <div className="relative flex items-start gap-4">
            <div className="rounded-xl bg-white/15 p-3">
              <Users size={24} className="text-white" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
                Special Offer
              </p>

              <h2 className="mt-1 text-xl font-black uppercase text-white md:text-2xl">
                {offer.title}
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/80">
                {offer.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}