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
import { InputTextareaField } from "@/components/form/InputTextareaField";
import { InputDatePicker } from "@/components/form/InputDatePicker";
import { InputSelectField } from "@/components/form/InputSelectField";

// schemas
const addNewOrderSchema = yup.object().shape({
  orderName: yup.string().required("Bu xana vacibdir"),
  orderDescription: yup.string().required("Bu xana vacibdir"),
  orderPriority: yup.string().required("Bu xana vacibdir"),
  assignee: yup.string().required("Bu xana vacibdir"),
  startDate: yup.string().required("Bu xana vacibdir"),
  deadline: yup.string().required("Bu xana vacibdir"),
  status: yup.string().required("Bu xana vacibdir"),
  comments: yup.string().required("Bu xana vacibdir"),
});
const filtersSchema = yup.object().shape({
  test1: yup.string().required("Bu xana vacibdir"),
  test2: yup.string().required("Bu xana vacibdir"),
  test3: yup.string().required("Bu xana vacibdir"),
  test4: yup.string().required("Bu xana vacibdir"),
});

// schema validation
type AddNewOrderFormValues = yup.InferType<typeof addNewOrderSchema>;
type FiltersFormValues = yup.InferType<typeof filtersSchema>;

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // forms methods
  const addNewOrderMethods = useForm<AddNewOrderFormValues>({
    resolver: yupResolver(addNewOrderSchema),
  });
  const filtersMethods = useForm<FiltersFormValues>({
    resolver: yupResolver(filtersSchema),
  });

  const [isMounted, setIsMounted] = useState<boolean | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // form submit handlers
  const handleAddNewOrderSubmit = (formData: AddNewOrderFormValues) => {
    console.log(formData);
  };
  const handleFiltersSubmit = (filterFormData: FiltersFormValues) => {
    console.log(filterFormData);
  };

  const handleApplyFilters = () => {
    console.log("Filters applied");
  }

  const statuses = [
    { id: 1, value: "Yeni" },
    { id: 2, value: "Təsdiqləndi" },
    { id: 3, value: "Qəbul edilən" },
    { id: 4, value: "Təsdiqlənməyən" },
  ];

  const priorities = [
    { id: 1, value: "Yüksək" },
    { id: 2, value: "Orta" },
    { id: 3, value: "Aşağı" },
  ];

  const assignees = [
    { id: 1, value: "Alice Brown" },
    { id: 2, value: "Bob Smith" },
    { id: 3, value: "Charlie Johnson" },
    { id: 4, value: "David Wilson" },
  ];

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
            title="Yeni sifariş əlavə et"
            content={
              <CFormProvider
                methods={addNewOrderMethods}
                onSubmit={handleAddNewOrderSubmit}
              >
                <div className="flex flex-col items-center lg:items-end gap-3">
                  <div className="inputs grid grid-cols-1 lg:grid-cols-1 gap-3 w-full">
                    <InputTextField
                      name="orderName"
                      label="Sifariş adı"
                      placeholder="Yeni loqo yaratmaq"
                      className="w-full border border-gray-300 p-3 rounded-[12px] text-sm"
                    />
                    <InputTextField
                      name="orderDescription"
                      label="Sifarişin təsviri"
                      placeholder="Minimalist loqo hazırlamaq"
                      className="w-full border border-gray-300 p-3 rounded-[12px] text-sm"
                    />

                    <InputSelectField
                      name="orderPriority"
                      label="Prioritet"
                      placeholder="Prioritet seçin"
                      defaultOptions={priorities.map((pr) => ({
                        id: pr.value,
                        name: pr.value,
                      }))}
                    />

                    {/* FIXME: Change this textfield input to select input */}

                    <InputSelectField
                      name="assignee"
                      label="Məsul şəxs"
                      placeholder="Məsul şəxs seçin"
                      defaultOptions={assignees.map((as) => ({
                        id: as.value,
                        name: as.value,
                      }))}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                      <InputDatePicker
                        name="startDate"
                        label="Başlama vaxtı"
                        placeholder="01.01.2001"
                        className="w-full border border-gray-300 p-3 rounded-[12px] text-sm"
                      />

                      <InputDatePicker
                        name="deadline"
                        label="Son tarix"
                        placeholder="02.02.2002"
                        className="w-full border border-gray-300 p-3 rounded-[12px] text-sm"
                      />
                    </div>

                    <InputSelectField
                      name="status"
                      label="Status"
                      placeholder="Status seçin"
                      defaultOptions={statuses.map((st) => ({
                        id: st.value,
                        name: st.value,
                      }))}
                    // className="w-full border border-gray-300 p-3 rounded-[12px] text-sm"
                    />

                    <InputTextareaField
                      name="comments"
                      label="Qeydlər"
                      placeholder="Bu iş uzun müddət çəkə bilər"
                      className="w-full border border-gray-300 p-3 rounded-[12px] text-sm min-h-[80px] max-h-[150px]"
                    />
                  </div>
                  <input
                    type="submit"
                    value="Əlavə et"
                    className="bg-[rgba(31,41,55,1)] hover:shadow-[0_0_3px_2px_rgba(31,41,55,0.5)] py-3 px-3 rounded-[12px] text-white text-sm cursor-pointer transition duration-150 w-full lg:w-max"
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

              <MantineModal
                title="Filtrlər"
                content={
                  <div>
                    <CFormProvider
                      methods={filtersMethods}
                      onSubmit={handleFiltersSubmit}
                    >
                      <div className="flex flex-row items-start gap-3 w-full">
                        <div className="filter_inputs-wrapper grid grid-cols-1 gap-4 w-full">
                          <InputSelectField
                            name="test1"
                            // label="Test 1"
                            placeholder="Prioritete gore"
                            defaultOptions={
                              priorities.map((pr) => ({
                                id: pr.value,
                                name: pr.value,
                              }))
                            }
                          />
                          <InputSelectField
                            name="test2"
                            // label="Test 2"
                            placeholder="Statusa gore"
                            defaultOptions={
                              statuses.map((st) => ({
                                id: st.value,
                                name: st.value,
                              }))
                            }
                          />
                          <InputSelectField
                            name="test3"
                            // label="Test 3"
                            placeholder="Assigne-ye gore"
                            defaultOptions={
                              assignees.map((as) => ({
                                id: as.value,
                                name: as.value,
                              }))
                            }
                          />
                        </div>
                        <input
                          type="button"
                          value="Tətbiq et"
                          onClick={handleApplyFilters}
                          className="bg-blue-500 hover:bg-blue-600 py-3 px-5 rounded-[12px] text-white transition duration-200 cursor-pointer"
                        />
                      </div>
                    </CFormProvider>
                  </div>
                }
                triggerLabel={
                  <>
                    <VscSettings />
                    Filtrlər
                  </>
                }
                btnStyle="block bg-white hover:bg-black/5 !py-3.5 px-4 rounded-[12px] flex flex-row items-center justify-center gap-3 border border-[rgba(227,227,227,1)] transition duration-150 h-full"
              />

              {/* <button
                type="button"
                className="bg-white hover:bg-black/5 py-2.5 px-4 rounded-[12px] flex flex-row items-center justify-center gap-3 border border-[rgba(227,227,227,1)] transition duration-150"
              >
                <VscSettings />
                Filtrlər
              </button> */}
            </div>
          )}
        </div>
      </div>

      {/* Order Table View */}
      <OrderTableView searchQuery={searchQuery} />
    </div>
  );
}
