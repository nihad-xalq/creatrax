"use client";

import { InputTextField } from "@/components/form/InputTextField";
import { CFormProvider } from "@/components/form/CFormProvider";
import { MantineModal } from "@/components/ui/MantineModal";
import { OrderTableView } from "@/views/OrderTableView";
import { yupResolver } from "@hookform/resolvers/yup";
import { VscSettings } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Bu xana vacibdir"),
  email: yup.string().required("Bu xana vacibdir"),
  message: yup.string().required("Bu xana vacibdir"),
});

type FormValues = yup.InferType<typeof schema>;

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const methods = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const [isMounted, setIsMounted] = useState<boolean | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleAddNewOrderSubmit = (formData: FormValues) => {
    console.log(formData);
  };

  return (
    <div>
      <div className="mb-8 flex flex-col lg:flex-col items-start lg:items-end justify-between gap-6">
        <div className="flex flex-row items-center justify-between w-full text-white">
          <h1 className="text-4xl text-gray-900 font-semibold">Sifarişlər</h1>
          {/* <button
            type="button"
            onClick={handleAddNewOrder}
            className="bg-[rgba(31,41,55,1)] hover:shadow-[0_3px_0px_1px_rgba(0,0,0,0.5)] py-3 px-8 rounded-[12px] flex flex-row items-center gap-3 transition duration-200"
          >
            <FaPlus />
            Add New Order
          </button> */}

          <MantineModal
            title="Add New Order"
            content={
              <CFormProvider
                methods={methods}
                onSubmit={handleAddNewOrderSubmit}
              >
                <div className="flex flex-col items-start gap-3">
                  <div className="inputs grid grid-cols-5 gap-3 w-full">
                    <InputTextField
                      name="orderName"
                      placeholder="Order name"
                      className="w-full border border-gray-300 p-3 rounded-[12px]"
                    />
                    <InputTextField
                      name="companyName"
                      placeholder="Company name"
                      className="w-full border border-gray-300 p-3 rounded-[12px]"
                    />
                    <InputTextField
                      name="address"
                      placeholder="Address"
                      className="w-full border border-gray-300 p-3 rounded-[12px]"
                    />
                    <InputTextField
                      name="phoneNumber"
                      placeholder="Phone number"
                      className="w-full border border-gray-300 p-3 rounded-[12px]"
                    />
                    <InputTextField
                      name="faxNumber"
                      placeholder="Fax number"
                      className="w-full border border-gray-300 p-3 rounded-[12px]"
                    />
                  </div>
                  <input
                    type="submit"
                    value="Submit"
                    className="bg-blue-500 hover:bg-blue-600 py-3 px-4 rounded-[12px] text-white cursor-pointer transition duration-200"
                  />
                </div>
              </CFormProvider>
            }
            triggerLabel={
              <>
                <FaPlus />
                Add New Order
              </>
            }
            btnStyle="bg-[rgba(31,41,55,1)] hover:bg-[rgba(31,41,55,0.9)] py-4 px-8 rounded-[12px] flex flex-row items-center gap-3 transition duration-200 text-white hover:text-white h-full"
          />
        </div>
        <div className="filters_wrapper flex flex-row justify-between items-end gap-4 mt-4">
          {isMounted && (
            <div className="sort_wrapper willSimplyFadeIn flex flex-row lg:flex-row items-start gap-2">
              {/* Search Input */}
              <div className="search_wrapper relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Sifarişi axtar..."
                  className="text-sm border border-[rgba(227,227,227,1)] rounded-[12px] px-3 py-3 pl-9 w-full outline-none focus:ring-1 focus:ring-slate-400 focus:shadow-md transition duration-200"
                />
                <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[rgba(136,136,136,1)]" />
              </div>

              {/* Filter */}
              <button
                type="button"
                className="bg-white hover:bg-black/5 py-2.5 px-4 rounded-[12px] flex flex-row items-center justify-center gap-3 border border-[rgba(227,227,227,1)] transition duration-150"
              >
                <VscSettings />
                Filter
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Order Table View */}
      <OrderTableView searchQuery={searchQuery} />
    </div>
  );
}
