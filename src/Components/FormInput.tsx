import { cn } from "../lib/utils";
import { motion } from "motion/react";
import { type ElementType } from "react";
const FormInputTypes = {
  text: "text",
  email: "email",
  password: "password",
  number: "number",
  date: "date",
  checkbox: "checkbox",
  radio: "radio",
  submit: "submit",
  button: "button",
};
export interface FormInputProps {
  as?: ElementType;
  label?: string;
  type?: string;
  placeholder?: string;
  name: string;
  id?: string;
  labelClassName?: string;
  inputClassName?: string;
  onChange?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  value?: string;
  required?: boolean;
  children?: string;
}

export const FormInput = ({
  as: Tag = "input",
  label,
  type = FormInputTypes.text,
  placeholder,
  name,
  id = name,
  labelClassName,
  inputClassName,
  onChange,
  value,
  required,
  children,
}: FormInputProps) => {
  return (
    <motion.div className="flex flex-col gap-2">
      {label && (
        <div className="flex gap-2 ">
          <label
            htmlFor={id}
            className={cn(
              "text-sm font-medium text-neutral-800",
              labelClassName
            )}
          >
            {label}
          </label>
          {required && <span className=" text-red-500 text-sm">*</span>}
        </div>
      )}
      {children ? (
        <Tag
          type={type}
          name={name}
          id={id}
          onChange={onChange}
          value={value}
          className={cn(
            "w-full rounded-lg border border-neutral-300 p-2 text-sm",
            inputClassName
          )}
        >
          {children}
        </Tag>
      ) : (
        <Tag
          type={type}
          name={name}
          id={id}
          onChange={onChange}
          value={value}
          className={cn(
            "w-full rounded-lg border border-neutral-300 p-2 text-sm",
            Tag === "textarea" ? "h-36 resize-none" : "",
            inputClassName
          )}
          placeholder={placeholder}
        />
      )}
    </motion.div>
  );
};
