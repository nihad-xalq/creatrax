import { Employee } from "@/types/employeesTypes";
import Image from "next/image";

interface EmployeeDetailsViewProps {
  employee: Employee;
}

export const EmployeeDetailsView: React.FC<EmployeeDetailsViewProps> = ({
  employee,
}) => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 lg:p-10 rounded-xl shadow-xl border border-gray-300 max-w-4xl mx-auto willFadeFromAbove">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-center mb-8 gap-6">
        <div className="text-white flex items-center justify-center rounded-full text-3xl font-bold">
          {employee.image ? (
            <Image
              src={employee.image}
              alt={employee.name}
              width={48}
              height={48}
              className="rounded-full object-cover shadow-md w-16 h-16"
            />
          ) : (
            employee.name[0]
          )}
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-4xl lg:text-4xl font-extrabold text-gray-900">
            {employee.name}
          </h1>
          <p className="text-base lg:text-lg text-gray-500">
            {employee.position}
          </p>
        </div>
      </div>

      {/* Details Section */}
      <div className="flex flex-col space-y-4 lg:space-y-4">
        <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-4">
          <strong className="text-2xl text-gray-900 text-center lg:text-left w-28">
            Vəzifə:
          </strong>
          <span className="text-lg text-gray-700">{employee.position}</span>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-4">
          <strong className="text-2xl text-gray-900 text-center lg:text-left w-28">
            Email:
          </strong>
          <a
            href={`mailto:${employee.email}`}
            className="text-lg text-blue-500 hover:underline"
          >
            {employee.email}
          </a>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-4">
          <strong className="text-2xl text-gray-900 text-center lg:text-left w-28">
            Telefon:
          </strong>
          <a
            href={`tel:${employee.phone}`}
            className="text-lg text-blue-500 hover:underline"
          >
            {employee.phone}
          </a>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-0 lg:gap-4">
          <strong className="text-2xl text-gray-900 text-center lg:text-left w-28">
            Haqqında:
          </strong>
          <p className="text-lg text-gray-700 leading-relaxed text-center lg:text-start">
            {employee.bio}
          </p>
        </div>
      </div>
    </div>
  );
};
