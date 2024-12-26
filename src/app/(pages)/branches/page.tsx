import { BranchesView } from "@/views/BranchesView";
import { branchesData } from "@/lib/branchesData";

export default function BranchesPage() {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto px-6">
        <BranchesView data={branchesData} />
      </div>
    </section>
  );
}
