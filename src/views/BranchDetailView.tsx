"use client";

import { Branch } from "@/types/branchesTypes";

interface BranchDetailViewProps {
  branch: Branch;
}

export const BranchDetailView: React.FC<BranchDetailViewProps> = ({
  branch,
}) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
        {branch.name}
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        <strong>Məkan:</strong> {branch.location}
      </p>
      <p className="text-lg text-gray-700 mb-4">
        <strong>Əlaqə:</strong> {branch.contact}
      </p>
      <p className="text-lg text-gray-700">
        <strong>Haqqında:</strong> {branch.description}
      </p>
    </div>
  );
};
