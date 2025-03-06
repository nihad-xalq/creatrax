"use client";

import { InputTextareaField } from "@/components/form/InputTextareaField";
import { InputSelectField } from "@/components/form/InputSelectField";
import { InputNumberField } from "@/components/form/InputNumberField";
import { InputDatePicker } from "@/components/form/InputDatePicker";
import { InputTextField } from "@/components/form/InputTextField";
import { CFormProvider } from "@/components/form/CFormProvider";
import { MantineModal } from "@/components/ui/MantineModal";
import { yupResolver } from "@hookform/resolvers/yup";
import { PageTitle } from "@/components/PageTitle";
import { financesData } from "@/lib/mockData";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { format } from "date-fns";
import { useState } from "react";
import * as yup from "yup";

const schema = yup.object().shape({
  actionType: yup.string().required("Bu xana vacibdir"),
  actionPayer: yup.string().required("Bu xana vacibdir"),
  actionAmount: yup.number().required("Bu xana vacibdir"),
  actionDescription: yup.string().optional(),
  paymentDate: yup.string().required("Bu xana vacibdir"),
  notes: yup.string().optional(),
});

type FormValues = yup.InferType<typeof schema>;

const tabs: {
  label: string;
  key: "incomes" | "expenses";
}[] = [
    { label: "Gəlirlər", key: "incomes" },
    { label: "Xərclər", key: "expenses" },
  ];

const actionTypes = [
  { id: 1, value: "Gəlir" },
  { id: 2, value: "Xərc" },
];

export const FinancesView = () => {
  const [currentTab, setCurrentTab] = useState<"incomes" | "expenses">(
    "incomes"
  );

  const methods = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      // actionType: "Gəlir",
      actionPayer: "",
      // actionAmount: 0,
      actionDescription: "",
      paymentDate: "",
      notes: "",
    }
  });

  const handleTabClick = (tab: "incomes" | "expenses") => setCurrentTab(tab);

  const filteredData = financesData.filter((item) => item.type === currentTab);

  const handleAddNewOrderSubmit = (formData: FormValues) => {
    const payload = {
      actionTypes: formData.actionType,
      actionPayer: formData.actionPayer,
      actionAmount: formData.actionAmount,
      actionDescription: formData.actionDescription,
      paymentDate: format(formData.paymentDate, "dd/MM/yyyy"),
      notes: formData.notes,
    }

    console.log(payload)

    methods.reset();
  };

  return (
    <section className="relative">
      <div className="about_inner">
        <PageTitle title="Maliyyə Hesabatı" />

        <div className="flex flex-row items-center justify-between w-full mb-4">
          {/* Tabs */}
          <div className="flex gap-3 bg-[rgba(251,251,251,1)] w-max px-2 py-2 rounded-[9px] mx-auto lg:mx-0">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                className={`min-w-28 flex justify-center items-center gap-2 px-4 py-2.5 rounded-[9px] text-sm text-center font-medium transition-all
                ${currentTab === tab.key
                    ? "bg-[rgba(31,41,55,1)] text-white"
                    : "text-[rgba(34,34,34,1)] hover:bg-gray-200"
                  }
              `}
                onClick={() => handleTabClick(tab.key)}
                disabled={currentTab === tab.key}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div>
            <MantineModal
              title="Yeni pul əlavə et"
              content={
                <CFormProvider
                  methods={methods}
                  onSubmit={handleAddNewOrderSubmit}
                >
                  <div className="flex flex-col items-center lg:items-end gap-3">
                    <div className="inputs grid grid-cols-1 lg:grid-cols-1 gap-3 w-full">
                      <InputSelectField
                        name="actionType"
                        label="Ödəmə növü"
                        placeholder="Ödəmə növü seçin"
                        defaultOptions={actionTypes.map((act) => ({
                          id: act.value,
                          name: act.value,
                        }))}
                      />

                      <InputTextField
                        name="actionPayer"
                        label="Ödəyən"
                        placeholder="Creadive Agency"
                        className="w-full border border-gray-300 p-3 rounded-[12px] text-sm"
                      />

                      <InputNumberField
                        name="actionAmount"
                        label="Miqdar"
                        placeholder="1000"
                        className="w-full border border-gray-300 p-3 rounded-[12px] text-sm"
                      />

                      <InputTextField
                        name="actionDescription"
                        label="Ödənişin təsviri"
                        placeholder="Test test test"
                        className="w-full border border-gray-300 p-3 rounded-[12px] text-sm"
                      />

                      <InputDatePicker
                        name="paymentDate"
                        label="Ödəniş tarixi"
                        placeholder="01.01.2001"
                        className="w-full border border-gray-300 p-3 rounded-[12px] text-sm"
                      />

                      <InputTextareaField
                        name="notes"
                        label="Qeydlər"
                        placeholder="Qeydləriniz"
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
                  Add action
                </>
              }
              btnStyle="flex flex-row items-center gap-3 bg-slate-700 hover:bg-slate-800 text-white hover:text-white py-3 px-6 rounded-[12px] transition duration-150 cursor-pointer min-h-12"
            />
          </div>
        </div>

        {/* Data Display */}
        <div className="grid gap-3 willFadeFromAbove">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div
                key={item.id}
                className="bg-white p-2 rounded-md border-l-4 border-blue-500 shadow-sm hover:shadow-md transition duration-200"
              >
                <h2 className="text-lg font-medium text-gray-800 mb-0.5">
                  {item.title}
                </h2>
                <p className="text-xs text-gray-600 mb-1">{item.content}</p>
                <div className="flex justify-between text-xs text-gray-700">
                  <span>
                    Məbləğ:{" "}
                    <span className="text-blue-600 font-semibold">
                      {item.amount} AZN
                    </span>
                  </span>
                  <span className="text-gray-500">📅 {item.date}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center text-sm">
              Məlumat tapılmadı.
            </p>
          )}
        </div>
      </div>

      <div className="fixed bottom-4 w-full py-3">
        <p className="flex flex-row items-baseline gap-3">
          <span className="text-2xl">Budget:</span>
          <span className="text-4xl font-semibold">₼{32_000}</span>
        </p>
      </div>
    </section>
  );
};
