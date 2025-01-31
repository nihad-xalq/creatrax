// "use client";

import { ErrorMessage } from "@hookform/error-message";
import { useState, useRef, useEffect } from "react";
import { useFormContext } from "react-hook-form";

interface Option {
  id: number | string;
  name: string | number;
  text?: string | number;
}

interface InputSelectFieldProps {
  name: string;
  label?: string;
  defaultOptions: Option[];
  disabled?: boolean;
  placeholder?: string;
}

export const InputSelectField: React.FC<InputSelectFieldProps> = ({
  name,
  label,
  defaultOptions = [],
  disabled = false,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const {
    register,
    setValue,
    formState: { errors },
    getValues,
  } = useFormContext();

  useEffect(() => {
    // Initialize selectedOption based on the defaultValue from react-hook-form
    const defaultValue = getValues(name);
    const matchedOption = defaultOptions.find(
      (option) => option.id === defaultValue
    );
    if (matchedOption) {
      setSelectedOption(matchedOption);
    }
  }, [defaultOptions, name, getValues]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //   useEffect(() => {
  //     register(name, { required: true });
  //   }, [register, name]);

  const handleSelectOption = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setValue(name, option.id, { shouldValidate: true });
  };

  return (
    <div className="relative h-max w-full" ref={dropdownRef}>
      <div className="input_wrapper relative">
        {label !== "unvisible" ? (
          <label className="text-sm text-[rgba(112,112,112,1)]" htmlFor={label}>
            {label}
          </label>
        ) : null}
        <button
          type="button"
          className="min-w-[12vw] w-full py-3 border border-[rgba(229,229,229,1)] rounded-lg cursor-pointer px-5 flex flex-row justify-between items-center gap-8"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
        >
          {selectedOption ? (
            <p className="w-[75%] text-ellipsis overflow-hidden whitespace-nowrap text-left">
              {selectedOption.name}
            </p>
          ) : (
            <p className="">
              <span className="text-gray-300">
                {placeholder ? placeholder : "Select option..."}
              </span>
            </p>
          )}
          <svg
            className={`w-4 h-4 transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      {isOpen && !disabled && (
        <div
          className={`willFastFadeIn absolute left-0 right-0 mt-2 p-1 border border-gray-300 bg-white rounded-[10px] shadow-lg z-10 max-h-[300px] w-full ${
            defaultOptions.length > 4 ? "overflow-y-scroll" : ""
          }`}
        >
          {defaultOptions.length > 0 ? (
            defaultOptions.map((option: Option, index) => (
              <div
                key={index}
                className="py-2 px-2 hover:bg-gray-200 cursor-pointer rounded-[10px] w-full"
                onClick={() => handleSelectOption(option)}
              >
                {option.name || option?.text}
              </div>
            ))
          ) : (
            <p className="text-center text-sm text-gray-500 p-1">No Options</p>
          )}
        </div>
      )}
      <input
        type="hidden"
        // not sure if ID must be here or not
        id={name}
        value={selectedOption ? selectedOption.id : ""}
        {...register(name)}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p className="willSimplyFadeIn text-red-500 text-sm mt-1 pl-1">
            {`• ${message}`}
          </p>
        )}
      />
    </div>
  );
};
