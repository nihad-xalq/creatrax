import { EmployeesView } from "@/views/EmployeesView";
import { employeesData } from "@/lib/employeesData";

export default function EmployeesPage() {
  return (
    <section className="">
      <div className="max-w-8xl mx-auto px-6">
        <EmployeesView data={employeesData} />
      </div>
    </section>
  );
}
