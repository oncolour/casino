"use client";

import React from "react";
import clsx from "clsx";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label?: string;
  labelClassName?: string;
  placeholder?: string;
  placeholderDisabled?: boolean;
  options: Array<{ value: string | number; label: string; disabled?: boolean }>;
}

export function Select({
  id: selectId,
  className,
  label,
  labelClassName,
  placeholder,
  placeholderDisabled = false,
  options,
  ...props
}: SelectProps) {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={selectId}
          className={clsx("text-sm font-medium mb-2", labelClassName)}
        >
          {label}
        </label>
      )}

      <div className="relative">
        <select
          id={selectId}
          className={clsx(
            "flex text-white font-bold h-10 w-full rounded-lg border border-none bg-surfaceTertiary px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer",
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled={placeholderDisabled}>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>

        {/* Custom dropdown arrow */}
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg
            className="h-4 w-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
