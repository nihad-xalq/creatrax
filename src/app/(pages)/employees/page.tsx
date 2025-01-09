import { EmployeesView } from "@/views/EmployeesView";
import { employeesData } from "@/lib/employeesData";

export default function EmployeesPage() {
  return (
    <section className="">
      <div className="">
        <EmployeesView data={employeesData} />
      </div>
    </section>
  );
}
