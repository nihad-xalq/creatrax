"use client";

import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";
import React, { FC } from "react";

interface IInputCheckboxField extends React.ComponentProps<"input"> {
  label: string;
  className?: string;
}

export const InputCheckboxField: FC<IInputCheckboxField> = ({ ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="checkbox-wrapper w-max flex items-center">
      <input
        type="checkbox"
        className={`${props.className} border border-gray-300 mr-0 cursor-pointer appearance-none h-4 w-4 bg-white rounded-[2px] checked:bg-emerald-500 checked:border-emerald-500 checked:after:content-['✔']  checked:after:text-white checked:after:block checked:after:text-center checked:after:text-xs checked:after:leading-4`}
        {...register(props.name!)}
        {...props}
        id={props.label}
      />
      <label
        htmlFor={props.label}
        className="text-[14px] text-gray-800 px-1.5 cursor-pointer"
      >
        {props.label}
      </label>
      <ErrorMessage
        errors={errors}
        name={props.name!}
        render={({ message }) => (
          <p className="text-red-500 text-sm mt-1 pl-1">{message}</p>
        )}
      />
    </div>
  );
};
