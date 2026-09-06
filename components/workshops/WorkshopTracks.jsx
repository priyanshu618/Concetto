import WorkshopCard from "./WorkshopCard";

export default function WorkshopTracks({ workshops }) {
  return (
    <section
      id="workshop-tracks"
      className="relative overflow-hidden bg-(--background) px-5 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-(--primary)">
            Explore
          </p>

          <h2 className="text-3xl font-black uppercase tracking-tight text-(--foreground) md:text-5xl">
            Workshop Tracks
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-(--text-muted)">
            Choose a track and discover the workshop experience designed
            around it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workshops.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}
        </div>
      </div>
    </section>
  );
}