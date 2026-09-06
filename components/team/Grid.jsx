import Card from "./Card";

export default function Grid({ members }) {
  const teams = [
    "convener",
    "secretariat",
    "coordinators",
    "co-coordinators",
    "pr",
    "event",
    "sponsorship",
  ];

  const smallTeams = ["pr", "event", "sponsorship"];

  const regularTeams = teams.filter(
    (team) => !smallTeams.includes(team)
  );

  return (
    <div className="space-y-20">

      {/* Regular Teams */}
      {regularTeams.map((team) => {
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

      {/* PR + Event + Sponsorship */}
      <section>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {smallTeams.map((team) => {
            const teamMembers = members.filter(
              (member) => member.team === team
            );

            if (teamMembers.length === 0) return null;

            return (
              <div key={team}>
                {/* Team heading */}
                <div className="mb-7 text-center">
                  <h2 className="text-xl font-bold uppercase tracking-tight text-[var(--foreground)] md:text-2xl">
                    {team} Team
                  </h2>

                  <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-[var(--primary)]" />
                </div>

                {/* Members */}
                <div className="space-y-6">
                  {teamMembers.map((member) => (
                    <Card key={member.name} member={member} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}