import { EmployeeDetailsView } from "@/views/EmployeeDetailsView";
import { employeesData } from "@/lib/employeesData";
import { FC } from "react";

interface EmployeeDetailsPageProps {
  params: {
    id: string;
  };
}

const EmployeeDetailsPage: FC<EmployeeDetailsPageProps> = ({ params }) => {
  const employee = employeesData.find((emp) => emp.id === Number(params.id));

  console.log(typeof params);

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