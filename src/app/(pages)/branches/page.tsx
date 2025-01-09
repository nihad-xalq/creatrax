import { BranchesView } from "@/views/BranchesView";
import { branchesData } from "@/lib/branchesData";

export default function BranchesPage() {
  return (
    <section className="">
      <div className="">
        <BranchesView data={branchesData} />
      </div>
    </section>
  );
}
