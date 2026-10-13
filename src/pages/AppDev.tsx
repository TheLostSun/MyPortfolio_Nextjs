import Seo from "@/components/Seo";
import PageIntro from "@/components/PageIntro";
import ProjectRow from "@/components/ProjectRow";
import { groups } from "@/data/site";

const mobile = (groups.find((g) => g.id === "games")?.projects ?? []).filter((p) =>
  ["fart-frog", "ether-surfers"].includes(p.id)
);

export default function AppDev() {
  return (
    <>
      <Seo title="Mobile games" path="/AppDev" description="Mobile games by Prabhu Awasthi: Fart Frog and Ether Surfers." />
      <PageIntro title="Mobile games">Games built in Unity and published for Android and iOS.</PageIntro>
      <div className="mx-auto max-w-page px-4 sm:px-6 border-t-2 border-ink">
        {mobile.map((p, i) => (
          <ProjectRow key={p.id} p={p} flip={i % 2 === 1} />
        ))}
      </div>
    </>
  );
}
