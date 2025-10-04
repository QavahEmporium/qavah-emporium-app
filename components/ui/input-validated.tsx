"use client";

import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

interface InputProps {
  type?: string;
  label: string;
  name: string;
  placeholder?: string;
  isPhoneNumber?: boolean;
  isPassword?: boolean;
  register: UseFormRegister<any>;
  Icon?: React.ComponentType<any>;
  errors?: Record<string, any>;
  stateError?: Record<string, string>;
  bgColour: string;
  isPending?: boolean;
  isRequired?: boolean;
  min?: string;
  max?: string;
}

const InputValidated = ({
  type,
  label,
  name,
  placeholder,
  isPhoneNumber,
  isPassword,
  register,
  Icon,
  errors,
  stateError,
  bgColour,
  isPending,
  isRequired,
  min,
  max,
}: InputProps) => {
  const disabledBgColour = "bg-gray-100";
  const [isShow, setIsShow] = useState(false);
  const [typeName, setTypeName] = useState(type);

  return (
    <div className="flex flex-col my-3">
      {/* Label + Required */}
      <div className="flex gap-1">
        <label className="font-mono text-emperor-950" htmlFor={name}>
          {label}
        </label>
        {isRequired && <p className="font-mono text-rose-bud-500">*</p>}
      </div>

      {/* Input container */}
      <div
        className={`flex items-center gap-1 px-4 rounded-xl ${
          isPending ? disabledBgColour : bgColour
        } overflow-hidden shadow-sm hover:shadow-lg shadow-lunar-green-300 transition-all`}
      >
        {Icon && <Icon size={20} className="text-gray-400" />}

        {isPhoneNumber && <div className="text-gray-600">+27</div>}

        <input
          id={name}
          placeholder={placeholder}
          className={`w-full h-10 border-none focus:outline-none focus:ring-0 text-black ${
            isPending ? disabledBgColour : bgColour
          }`}
          type={typeName ? typeName : "text"}
          disabled={isPending}
          {...register(name)}
          min={min || undefined}
          max={max || undefined}
        />

        {/* Password toggle */}
        {isPassword &&
          (isShow ? (
            <EyeOff
              className="text-gray-400 cursor-pointer"
              onClick={() => {
                setIsShow(false);
                setTypeName("password");
              }}
            />
          ) : (
            <Eye
              className="text-gray-400 cursor-pointer"
              onClick={() => {
                setIsShow(true);
                setTypeName("text");
              }}
            />
          ))}
      </div>

      {/* Validation errors */}
      {errors && errors[name] && (
        <span className="text-red-500">{errors[name]?.message}</span>
      )}
      {stateError && stateError[name] && (
        <span className="text-red-500">{stateError[name]}</span>
      )}
    </div>
  );
};

export default InputValidated;
