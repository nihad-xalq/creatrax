"use client";

import { FiMinus, FiPlus, FiSearch } from "react-icons/fi";
import { Employee } from "@/types/employeesTypes";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PageTitle } from "@/components/PageTitle";

interface EmployeesViewProps {
  data: Employee[];
}

export const EmployeesView: React.FC<EmployeesViewProps> = ({ data }) => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEmployees = data.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.position.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLoadMore = () => {
    if (visibleCount >= filteredEmployees.length) {
      setVisibleCount(6); // Reset to initial count
    } else {
      setVisibleCount((prev) => prev + 6); // Load more items
    }
  };

  const isAllLoaded = visibleCount >= filteredEmployees.length;

  return (
    <section className="py-3">
      <div className="flex flex-col lg:flex-row items-center justify-between mb-12 lg:mb-0">
        {/* Header Section */}
        <div className="text-center flex flex-col items-center lg:items-start gap-3 mb-6">
          <PageTitle title="İşçilər" />
          {/* <p className="text-gray-600 mt-0 text-lg">
            Burada Creadive komandasının üzvlərini tapa bilərsiniz.
          </p> */}
        </div>

        {/* Search Section */}
        <div className="relative min-w-full lg:min-w-[20rem]">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Ad və ya Vəzifəyə görə axtarış..."
            className="w-full py-3 px-4 pl-12 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          />
          <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-300 w-6 h-6" />
        </div>
      </div>

      {/* Employee Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 willFadeFromAbove">
        {filteredEmployees.slice(0, visibleCount).map((employee) => (
          <li
            key={employee.id}
            className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full font-bold text-lg shadow-md overflow-hidden">
                  {employee.image ? (
                    <Image
                      src={employee.image}
                      alt={employee.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    employee.name[0]
                  )}
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {employee.name}
                  </h2>
                  <p className="text-sm text-gray-500">{employee.position}</p>
                </div>
              </div>
              <p className="text-md text-gray-700 mb-0 line-clamp-2">
                {employee.bio}
              </p>
            </div>
            <div className="p-4 py-2 bg-gray-50 rounded-b-xl border-t border-gray-200 flex justify-between items-center">
              <Link
                href={`/employees/${employee.id}`}
                className="text-blue-500 hover:underline font-medium"
              >
                Daha Ətraflı
              </Link>
              <Link
                href={`mailto:${employee.email}`}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                // onClick={() => alert(`Contacting ${employee.name}`)}
              >
                Əlaqə Saxla
              </Link>
            </div>
          </li>
        ))}
      </ul>

      {/* Load More / View Less Button */}
      <div className="mt-8 text-center">
        {filteredEmployees.length > 6 && (
          <button
            onClick={handleLoadMore}
            className="bg-slate-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300"
          >
            {isAllLoaded ? (
              <div className="flex flex-row items-center gap-2">
                Daha Az Göstər <FiMinus />
              </div>
            ) : (
              <div className="flex flex-row items-center gap-2">
                Daha Çox Göstər <FiPlus />
              </div>
            )}
          </button>
        )}
      </div>

      {/* No Results Message */}
      {filteredEmployees.length === 0 && (
        <div className="text-center text-gray-500 mt-10">
          Axtarışa uyğun nəticə tapılmadı.
        </div>
      )}
    </section>
  );
};
