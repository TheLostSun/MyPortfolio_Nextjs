import Seo from "@/components/Seo";
import PageIntro from "@/components/PageIntro";
import ProjectRow from "@/components/ProjectRow";
import { course } from "@/data/site";

export default function Courses() {
  return (
    <>
      <Seo title="Teaching" path="/Courses" description="Unity and C# course for beginners by Prabhu Awasthi on Udemy and Tutorials Point." />
      <PageIntro title="Teaching">I teach Unity and C# to people who have never written code.</PageIntro>
      <div className="mx-auto max-w-page px-4 sm:px-6 border-t-2 border-ink">
        <ProjectRow p={course} />
      </div>
    </>
  );
}
