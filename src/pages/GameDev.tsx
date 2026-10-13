import Seo from "@/components/Seo";
import PageIntro from "@/components/PageIntro";
import ProjectRow from "@/components/ProjectRow";
import { allWork } from "@/data/site";

export default function Work() {
  return (
    <>
      <Seo
        title="Work"
        path="/GameDev"
        description="Unity projects by Prabhu Awasthi: PM Gati Shakti, TATA ADAS Simulator, Samudra Manthan VR, Vectra ATC simulator, MIMIC, Fart Frog and more."
      />
      <PageIntro title="Work">Simulators, public installations and shipped games, all built in Unity.</PageIntro>
      <div className="mx-auto max-w-page px-4 sm:px-6 border-t-2 border-ink">
        {allWork.map((p, i) => (
          <ProjectRow key={p.id} p={p} flip={i % 2 === 1} />
        ))}
      </div>
    </>
  );
}
