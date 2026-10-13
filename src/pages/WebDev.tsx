import Seo from "@/components/Seo";
import PageIntro from "@/components/PageIntro";
import ProjectRow from "@/components/ProjectRow";
import { web } from "@/data/site";

export default function WebDev() {
  return (
    <>
      <Seo title="Web" path="/WebDev" description="Web projects by Prabhu Awasthi, built with Next.js, React and Node." />
      <PageIntro title="Web">Full-stack projects from before I moved into Unity full time, plus this site.</PageIntro>
      <div className="mx-auto max-w-page px-4 sm:px-6 border-t-2 border-ink">
        {web.map((p, i) => (
          <ProjectRow key={p.id} p={p} flip={i % 2 === 1} />
        ))}
      </div>
    </>
  );
}
