"use client";

import { BranchDetailView } from "@/views/BranchDetailView";
import { branchesData } from "@/lib/branchesData";
import { useParams } from "next/navigation";

export default function BranchDetailPage() {
  const params = useParams<{ id: string }>();

  const branch = branchesData.find((branch) => branch.id === Number(params.id));

  if (!branch) {
    return <div className="text-center mt-20">Filial tapılmadı</div>;
  }

  return (
    <section className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-6">
        <BranchDetailView branch={branch} />
      </div>
    </section>
  );
}
