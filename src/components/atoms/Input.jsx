import React from "react";
import { motion } from "framer-motion";
import Typography from "../atoms/Typography";
import { useFormContext, Controller } from "react-hook-form";
import Select from "react-select";

const Input = ({
  name,
  label,
  type = "text",
  placeholder = "",
  disabled = false,
  className = "",
  labelClassName = "",
  inputClassName = "",
  errorClassName = "",
  required = false,
  icon,
  animation = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 },
  },
  validation = {},
  selectOptions,
  isMulti = false,
  isSearchable = true,
  rows = 3,
  ...props
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext() || {};

  if (!control && !props.onChange) {
    console.warn(
      `Input component with name "${name}" should be used within a FormProvider or provide onChange handler`
    );
  }

  const selectStyles = {
    control: (base, state) => ({
      ...base,
      minHeight: "42px",
      borderColor: errors?.[name] ? "#ef4444" : "#d1d5db",
      boxShadow: state.isFocused ? "0 0 0 2px rgba(59, 130, 246, 0.2)" : "none",
      "&:hover": {
        borderColor: errors?.[name] ? "#ef4444" : "#9ca3af",
      },
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "#1d4ed8"
        : state.isFocused
        ? "#eff6ff"
        : "white",
      color: state.isSelected ? "white" : "#1f2937",
    }),
  };

  const commonInputClasses = `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue transition-all ${
    icon ? "pl-10" : ""
  } ${
    errors?.[name] || props.error
      ? "border-red-500 focus:ring-red-200"
      : "border-gray-300 focus:ring-blue-200"
  } ${inputClassName}`;

  return (
    <motion.div
      initial={animation.initial}
      animate={animation.animate}
      transition={animation.transition}
      className={`flex flex-col gap-1 w-full ${className}`}
    >
      {label && (
        <label
          htmlFor={name}
          className={
            errors?.[name] || props.error
              ? `text-sm font-medium text-red-700 ${labelClassName}`
              : `text-sm font-medium text-gray-700 ${labelClassName}`
          }
        >
          {label}
          {required && (
            <span
              className={
                errors?.[name] ? "text-red-500 ml-1" : "text-gray-700 ml-1"
              }
            >
              *
            </span>
          )}
        </label>
      )}

      <div className="relative">
        {icon && type !== "textarea" && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}

        {type === "select" ? (
          control ? (
            <Controller
              name={name}
              control={control}
              rules={validation}
              render={({ field }) => (
                <Select
                  {...field}
                  options={selectOptions}
                  isMulti={isMulti}
                  isSearchable={isSearchable}
                  styles={selectStyles}
                  className={`react-select-container ${
                    errors?.[name] ? "error" : ""
                  }`}
                  classNamePrefix="react-select"
                  placeholder={placeholder}
                  isDisabled={disabled}
                  onChange={(selected) =>
                    field.onChange(isMulti ? selected : selected?.value)
                  }
                  onBlur={field.onBlur}
                  value={
                    selectOptions?.find(
                      (option) => option.value === field.value
                    ) ||
                    (isMulti
                      ? selectOptions?.filter((option) =>
                          field.value?.includes(option.value)
                        )
                      : null)
                  }
                />
              )}
            />
          ) : (
            <Select
              options={selectOptions}
              isMulti={isMulti}
              isSearchable={isSearchable}
              styles={selectStyles}
              className={`react-select-container ${props.error ? "error" : ""}`}
              classNamePrefix="react-select"
              placeholder={placeholder}
              isDisabled={disabled}
              onChange={(selected) =>
                props.onChange?.(isMulti ? selected : selected?.value)
              }
              value={
                selectOptions?.find((option) => option.value === props.value) ||
                (isMulti
                  ? selectOptions?.filter((option) =>
                      props.value?.includes(option.value)
                    )
                  : null)
              }
            />
          )
        ) : type === "textarea" ? (
          control ? (
            <Controller
              name={name}
              control={control}
              rules={validation}
              render={({ field }) => (
                <textarea
                  id={name}
                  placeholder={placeholder}
                  disabled={disabled}
                  rows={rows}
                  className={`${commonInputClasses} ${className} resize-y min-h-[100px]`}
                  {...field}
                  {...props}
                />
              )}
            />
          ) : (
            <textarea
              id={name}
              name={name}
              placeholder={placeholder}
              disabled={disabled}
              rows={rows}
              className={`${commonInputClasses} ${className} resize-y min-h-[100px]`}
              {...props}
            />
          )
        ) : control ? (
          <Controller
            name={name}
            control={control}
            rules={validation}
            render={({ field }) => (
              <input
                id={name}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                className={commonInputClasses}
                {...field}
                {...props}
              />
            )}
          />
        ) : (
          <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            className={commonInputClasses}
            {...props}
          />
        )}
      </div>

      {(errors?.[name] || props.error) && (
        <Typography
          variant="body"
          size="sm"
          className={`text-red-500 mt-1 ${errorClassName}`}
        >
          {errors?.[name]?.message || props.error}
        </Typography>
      )}
    </motion.div>
  );
};

export default Input;
