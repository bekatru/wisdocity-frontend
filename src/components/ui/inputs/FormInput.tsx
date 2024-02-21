import { Input, InputProps, Label } from "components"

interface FormInputProps extends InputProps {
    label: string
}

export function FormInput({label, className, ...inputProps}: FormInputProps) {
    return(
        <div className={className}>
              <Label>{label}</Label>
              <div className="">
                <Input
                  className="text-base h-11 block w-full rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:leading-6"
                  {...inputProps}
                />
              </div>
            </div>
    )
}