"use client";

import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";
import React, { FC } from "react";

interface IInputTextField extends React.ComponentProps<"input"> {
  label?: string;
  className?: string;
}

export const InputTextField: FC<IInputTextField> = ({ ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="input_wrapper relative w-full">
      {props.label && (
        <label className="text-sm text-gray-800 pl-1" htmlFor={props.label}>
          {props.label}
        </label>
      )}
      <input
        className={`${props.className} w-full py-3 px-5 text-sm border border-gray-300 placeholder-gray-300 rounded-lg focus-visible:outline-none`}
        {...register(props.name!)}
        {...props}
        id={props?.label}
      />
      <ErrorMessage
        errors={errors}
        name={props.name!}
        render={({ message }) => (
          <p className="willSimplyFadeIn text-red-500 text-sm mt-1 pl-1">
            {message}
          </p>
        )}
      />
    </div>
  );
};
