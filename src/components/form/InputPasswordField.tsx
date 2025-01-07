"use client";

import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";
import React, { FC, useState } from "react";
import { FaEye, FaEyeSlash, FaInfoCircle } from "react-icons/fa";

interface IInputPasswordField extends React.ComponentProps<"input"> {
  label?: string;
  className?: string;
}

export const InputPasswordField: FC<IInputPasswordField> = ({ ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="input_wrapper relative w-full">
      {props.label && (
        <label className="text-sm text-gray-800 pl-1" htmlFor={props.label}>
          {props.label}
        </label>
      )}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          className={`${props.className} w-full py-3 px-5 text-sm border border-gray-300 placeholder-gray-300 rounded-lg focus-visible:outline-none`}
          {...register(props.name!)}
          {...props}
          id={props?.label}
        />
        {/* Info icon for password guide */}
        <div
          className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <FaInfoCircle />
          {showTooltip && (
            <div className="absolute bottom-full -left-20 -translate-x-1/2 !z-[99999999] mb-2 w-80 p-2 text-xs text-white bg-blue-950 rounded shadow-lg">
              Şifrə minimum 8 simvol olmalıdır, ən az bir böyük hərf və bir
              xüsusi simvol daxil etməlidir.
            </div>
          )}
        </div>
        {/* Eye icon for visibility toggle */}
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-12 flex items-center text-gray-500"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
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
