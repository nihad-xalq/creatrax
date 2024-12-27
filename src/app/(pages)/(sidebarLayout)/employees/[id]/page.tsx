"use client";

import { EmployeeDetailsView } from "@/views/EmployeeDetailsView";
import { employeesData } from "@/lib/employeesData";
import { useParams } from "next/navigation";

export default function EmployeeDetailsPage() {
  const params = useParams<{ id: string }>();
  const employee = employeesData.find((emp) => emp.id === Number(params.id));

  if (!employee) {
    return <div className="text-center mt-20">İşçi tapılmadı</div>;
  }

  return (
    <section className="">
      <div className="px-2">
        <EmployeeDetailsView employee={employee} />
      </div>
    </section>
  );
}
