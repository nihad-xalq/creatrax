"use client";

import { InputTextareaField } from "@/components/form/InputTextareaField";
import { InputSelectField } from "@/components/form/InputSelectField";
import { InputNumberField } from "@/components/form/InputNumberField";
import { InputDatePicker } from "@/components/form/InputDatePicker";
import { InputTextField } from "@/components/form/InputTextField";
import { CFormProvider } from "@/components/form/CFormProvider";
import { MantineLineChart } from "./Dashboard/MantineLineChart";
import { MantineModal } from "@/components/ui/MantineModal";
import { yupResolver } from "@hookform/resolvers/yup";
import { PageTitle } from "@/components/PageTitle";
import { financesData } from "@/lib/mockData";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { format } from "date-fns";
import { useState } from "react";
import * as yup from "yup";

// FIXME: change this to dynamic data
const budgetAmount: number = 32_000;

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
      actionAmount: 0,
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

  const moneyData = [
    { date: "2020-01-27", Gəlirlər: 2839, Xərclər: 1671 },
    { date: "2020-06-24", Gəlirlər: 2885, Xərclər: 4712 },
    { date: "2020-07-31", Gəlirlər: 2903, Xərclər: 2094 },
    { date: "2020-08-12", Gəlirlər: 1603, Xərclər: 1590 },
    { date: "2020-08-18", Gəlirlər: 1759, Xərclər: 3403 },
    { date: "2021-02-05", Gəlirlər: 2102, Xərclər: 3298 },
    { date: "2021-03-15", Gəlirlər: 2451, Xərclər: 3849 },
    { date: "2021-05-20", Gəlirlər: 2673, Xərclər: 4320 },
    { date: "2021-06-08", Gəlirlər: 1980, Xərclər: 2756 },
    { date: "2021-09-30", Gəlirlər: 2324, Xərclər: 3910 },
    { date: "2022-01-14", Gəlirlər: 2795, Xərclər: 4021 },
    { date: "2022-03-22", Gəlirlər: 1950, Xərclər: 2783 },
    { date: "2022-07-06", Gəlirlər: 2550, Xərclər: 4695 },
    { date: "2022-09-10", Gəlirlər: 2410, Xərclər: 4100 },
    { date: "2022-12-25", Gəlirlər: 2995, Xərclər: 3502 },
    { date: "2023-02-11", Gəlirlər: 2120, Xərclər: 3280 },
    { date: "2023-04-28", Gəlirlər: 2658, Xərclər: 4123 },
    { date: "2023-06-17", Gəlirlər: 2763, Xərclər: 4985 },
    { date: "2023-07-23", Gəlirlər: 2890, Xərclər: 4701 },
    { date: "2023-10-31", Gəlirlər: 3150, Xərclər: 4820 },
    { date: "2024-01-05", Gəlirlər: 2790, Xərclər: 4050 },
    { date: "2024-02-18", Gəlirlər: 2305, Xərclər: 3560 },
    { date: "2024-03-06", Gəlirlər: 2420, Xərclər: 4098 },
    { date: "2024-03-15", Gəlirlər: 2715, Xərclər: 4703 },
    { date: "2024-03-29", Gəlirlər: 2990, Xərclər: 4952 },
  ];

  return (
    <section className="financesSection flex flex-col-reverse lg:flex-row justify-between items-start gap-6 w-full">
      <div className="about_inner w-full lg:w-1/2 border border-gray-200 rounded-[12px] p-3">
        <PageTitle title="Maliyyə Hesabatı" />

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full mb-4">
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
              title="Yeni tranzaksiya əlavə et"
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
                  {/* className="mr-2" */}
                  <FaPlus />
                  {/* Tranzaksiya əlavə et */}
                </>
              }
              btnStyle="flex flex-row items-center gap-3 bg-slate-700 hover:bg-slate-800 text-white hover:text-white py-3 px-6 rounded-[12px] transition duration-150 cursor-pointer min-h-12"
            />
          </div>
        </div>

        {/* Data Display */}
        <ul className="grid gap-3 willFadeFromAbove">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <MantineModal
                key={item.id}
                title={item.title}
                content={
                  <div>
                    <p className="text-sm text-gray-600 mb-3">{item.content}</p>
                    <div className="flex items-center justify-between text-gray-700">
                      <span className="bg-blue-950 py-1 px-2 rounded-[6px] text-white">
                        {/* Məbləğ:{" "} */}
                        <span className="font-semibold">
                          {item.amount} AZN
                        </span>
                      </span>
                      <span className="text-gray-500">📅 {item.date}</span>
                    </div>
                  </div>
                }
                btnStyle="bg-white p-1 rounded-md border-l-4 border-blue-500 shadow-sm hover:shadow-md transition duration-200 w-full h-full flex"
                triggerLabel={
                  <li
                    className="p-1 w-full flex flex-row justify-between items-center"
                  >
                    <h2 className="text-base font-medium text-gray-800 mb-0.5">
                      {item.title}
                    </h2>
                    <div className="flex justify-end text-base text-gray-700 w-full">
                      <span>
                        <span className="text-blue-800 font-semibold">
                          {item.amount} AZN
                        </span>
                      </span>
                    </div>
                  </li>
                }
              />
            ))
          ) : (
            <p className="text-gray-500 text-center text-sm">
              Məlumat tapılmadı.
            </p>
          )}
        </ul>
      </div>

      <div className="w-full border border-gray-200 rounded-[12px] p-5">
        <p className="flex flex-row items-baseline gap-3">
          <span className="text-2xl">Budget:</span>
          <span className="text-4xl font-semibold">₼{budgetAmount}</span>
        </p>
        <MantineLineChart data={moneyData} />
      </div>
    </section>
  );
};
