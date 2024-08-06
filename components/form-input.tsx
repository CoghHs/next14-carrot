import { KeyIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

interface FormInputProps {
  type: string;
  placeholder: string;
  required: boolean;
  errors: string[];
  name: string;
}

export default function FormInput({
  type,
  placeholder,
  required,
  errors,
  name,
}: FormInputProps) {
  const hasError = errors.length > 0;
  return (
    <div className="flex flex-col gap-2">
      <div className="relative flex items-center ">
        {name === "email" && (
          <EnvelopeIcon className="size-5 left-5 absolute opacity-65" />
        )}
        {name === "username" && (
          <UserIcon className="size-5 left-5 absolute opacity-65" />
        )}
        {name === "password" && (
          <KeyIcon className="size-5 left-5 absolute opacity-65" />
        )}
        <input
          name={name}
          className={`p-3 pl-12 w-full rounded-3xl transition focus:ring-2 focus:ring-neutral-300 focus:ring-offset-4 placeholder:text-neutral-400 ${
            hasError
              ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500"
              : "border-neutral-300 focus:border-neutral-300"
          }`}
          type={type}
          placeholder={placeholder}
          required={required}
        />
      </div>
      {errors.map((error, index) => (
        <span key={index} className="text-red-500 py-2 font-light">
          {error}
        </span>
      ))}
    </div>
  );
}
