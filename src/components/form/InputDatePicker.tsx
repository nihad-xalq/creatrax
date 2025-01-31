import { Controller, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import React, { FC, useRef } from "react";
import moment from "moment";

interface IInputDatePicker extends React.ComponentProps<"input"> {
  label?: string;
  name: string;
}

export const InputDatePicker: FC<IInputDatePicker> = ({ ...props }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const datePickerRef = useRef<DatePicker>(null);

  return (
    <div className="input_wrapper relative w-full flex flex-col">
      {props.label && (
        <label
          className="text-sm text-[rgba(112,112,112,1)] pl-1 mb-1"
          htmlFor={props.label}
        >
          {props.label}
        </label>
      )}

      <Controller
        control={control}
        name={props.name}
        render={({ field: { onChange, onBlur, value: Cvalue, name } }) => {
          return (
            <>
              <DatePicker
                onBlur={onBlur}
                // selected={Cvalue ? moment(Cvalue, "DD.MM.YYYY").toDate() : null}
                selected={Cvalue ? moment(Cvalue).toDate() : null}
                onChange={onChange}
                ref={datePickerRef}
                name={name}
                className="relative w-full py-3 px-5 border border-[rgba(229,229,229,1)] placeholder-gray-300 font-[500] rounded-lg focus-visible:outline-none"
                // dateFormat="dd.MM.yyyy"
                scrollableYearDropdown
                showYearDropdown
                yearDropdownItemNumber={15}
                placeholderText={props.placeholder}
              />
              <div
                className="absolute inset-y-0 right-4 top-6 flex items-center text-gray-500 cursor-pointer"
                onClick={() => datePickerRef.current?.setOpen(true)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 4H6C3.79086 4 2 5.79086 2 8V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V8C22 5.79086 20.2091 4 18 4Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 2V6M16 2V6M2 10H22"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </>
          );
        }}
      />
      <ErrorMessage
        errors={errors}
        name={props.name}
        render={({ message }) => (
          <p className="willSimplyFadeIn text-red-500 text-sm mt-1 pl-1">{`• ${message}`}</p>
        )}
      />
    </div>
  );
};
