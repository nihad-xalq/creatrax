"use client";

import { EmployeeDetailsView } from "@/views/EmployeeDetailsView";
import { employeesData } from "@/lib/employeesData";
import { useParams } from "next/navigation";

const EmployeeDetailsPage = () => {
  const params = useParams<{ id: string }>();
  const employee = employeesData.find((emp) => emp.id === Number(params.id));

  if (!employee) {
    return <div className="text-center mt-20">İşçi tapılmadı</div>;
  }

  return (
    <section className="">
      <div className="max-w-4xl mx-auto px-6">
        <EmployeeDetailsView employee={employee} />
      </div>
    </section>
  );
};

export default EmployeeDetailsPage;
