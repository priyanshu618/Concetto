import Card from "./Card";

export default function Grid({ members, teams }) {
  return (
    <div className="space-y-20">
      {teams.map((team) => {
        const teamMembers = members.filter(
          (member) => member.team === team
        );

        if (teamMembers.length === 0) return null;

        const count = teamMembers.length;

        let gridClass =
          "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4";

        if (count === 1) {
          gridClass = "mx-auto grid max-w-sm grid-cols-1 gap-6";
        } else if (count === 2) {
          gridClass =
            "mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2";
        } else if (count === 3) {
          gridClass =
            "mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3";
        }

        return (
          <section key={team}>
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold uppercase tracking-tight text-[var(--foreground)] md:text-3xl">
                {team} Team
              </h2>

              <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[var(--primary)]" />
            </div>

            <div className={gridClass}>
              {teamMembers.map((member) => (
                <Card key={member.name} member={member} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}