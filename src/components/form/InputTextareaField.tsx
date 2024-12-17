"use client";

import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";
import React, { FC } from "react";

interface IInputTextareaField extends React.ComponentProps<"textarea"> {
  label?: string;
  className?: string;
}

export const InputTextareaField: FC<IInputTextareaField> = ({ ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="input_wrapper relative w-full">
      {props.label !== "unvisible" ? (
        <label
          // absolute -top-2.5 left-2 bg-white px-1.5
          className="text-sm text-gray-800 pl-1"
          htmlFor={props.label}
        >
          {props.label}
        </label>
      ) : null}
      <textarea
        className={`w-full py-3 px-5 border border-gray-300 placeholder-gray-300 rounded-lg focus-visible:outline-none min-h-32 max-h-48 ${props.className}`}
        {...register(props?.name!)}
        {...props}
        id={props?.label}
      />
      <ErrorMessage
        errors={errors}
        name={props?.name!}
        render={({ message }) => (
          <p className="willSimplyFadeIn text-red-500 text-sm mt-1 pl-1">
            {message}
          </p>
        )}
      />
    </div>
  );
};
