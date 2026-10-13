import Arrow from "@/components/Arrow";
import Seo from "@/components/Seo";
import PageIntro from "@/components/PageIntro";
import ProjectRow from "@/components/ProjectRow";
import { groups } from "@/data/site";

export default function Work() {
  return (
    <>
      <Seo
        title="Work"
        path="/GameDev"
        description="Unity projects by Prabhu Awasthi: Vectra ATC simulator, TATA ADAS Simulator, PM Gati Shakti, Samudra Manthan VR, Fart Frog, MIMIC and more."
      />
      <PageIntro title="Work">
        Simulators, public installations and shipped games, all built in Unity.
        <nav aria-label="Project groups" className="mt-5 flex flex-wrap gap-2">
          {groups.map((g) => (
            <a key={g.id} href={`#${g.id}`} className="sign sign-direction">
              <Arrow dir="se" />
              {g.name}
            </a>
          ))}
        </nav>
      </PageIntro>
      {groups.map((g) => (
        <section key={g.id} id={g.id} aria-labelledby={`${g.id}-h`} className="scroll-mt-4 border-t-2 border-ink">
          <div className="mx-auto max-w-page px-4 sm:px-6 pt-10">
            <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <h2 id={`${g.id}-h`} className="sign sign-location text-2xl">
                {g.name}
              </h2>
              <p className="text-muted max-w-xl">{g.intro}</p>
            </div>
            {g.projects.map((p, i) => (
              <ProjectRow key={p.id} p={p} flip={i % 2 === 1} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
