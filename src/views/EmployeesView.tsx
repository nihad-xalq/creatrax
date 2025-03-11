"use client";

import { MantineModal } from "@/components/ui/MantineModal";
import { FiMinus, FiPlus, FiSearch } from "react-icons/fi";
import { PageTitle } from "@/components/PageTitle";
import { Employee } from "@/types/employeesTypes";
import { useState } from "react";
import Image from "next/image";

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
    <section className="employeesSection py-3">
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
      <ul className="grid grid-cols-1 gap-2 willFadeFromAbove">
        {filteredEmployees.slice(0, visibleCount).map((employee) => (
          <MantineModal
            key={employee.id}
            // title={employee.name}
            content={
              <div
                className="py-4 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300 flex flex-row justify-between"
              >
                <div className="px-6 py-0 flex flex-col lg:flex-col items-start gap-3 lg:gap-6">
                  <div className="flex items-center w-max min-w-max">
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
                      <h2 className="text-lg text-gray-900 font-semibold tracking-normal">
                        {employee.name}
                      </h2>
                      <p className="text-sm text-gray-500">{employee.position}</p>
                    </div>
                  </div>
                  <p className="text-md text-gray-700 mb-0">
                    {employee.bio}
                  </p>
                </div>
              </div>
            }
            btnStyle="bg-white p-0.5 rounded-md border-l-4 border-blue-500 shadow-sm hover:shadow-md transition duration-200 w-full h-full flex"
            triggerLabel={
              <li
                key={employee.id}
                className="py-3 flex flex-row justify-between w-full"
              >
                <div className="px-4 py-0 flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-12 w-full">
                  <div className="flex items-center">
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
                    <div className="ml-4 flex flex-col items-start gap-0">
                      <h2 className="text-lg text-gray-900 font-semibold leading-tight">
                        {employee.name}
                      </h2>
                      <p className="text-sm text-gray-500 font-normal">{employee.position}</p>
                    </div>
                  </div>
                  {/* <p className="text-md text-gray-700 font-medium mb-0">
                    {employee.bio}
                  </p> */}
                  <p className="text-md text-gray-700 font-medium mb-0">
                    {employee.email}
                  </p>
                  <p className="text-md text-gray-700 font-medium mb-0">
                    {employee.phone}
                  </p>
                </div>
              </li>
            }
          />
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
