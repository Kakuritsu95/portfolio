interface ContactFormFieldProps {
    inputType?: "input" | "textarea"
    type?: "email" | "text" | "number"
    name: string
    placeHolder: string
    labelText: string
}
export default function ContactFormField({
    inputType = "input",
    type = "text",
    name,
    placeHolder,
    labelText,
}: ContactFormFieldProps) {
    return (
        <div className="flex flex-1 flex-col space-y-3">
            <label
                className="text-lg font-thin text-gray-600 dark:text-gray-200"
                htmlFor="name"
            >
                {labelText}
            </label>

            {inputType == "input" ? (
                <input
                    type={type}
                    required={name != "name"}
                    name={name}
                    minLength={4}
                    id={name}
                    placeholder={placeHolder}
                    className="border-b border-gray-600 pb-2.5 text-xl outline-none focus:text-blue-900 dark:border-gray-200 dark:bg-inherit dark:focus:text-gray-50"
                />
            ) : (
                <textarea
                    placeholder={placeHolder}
                    required
                    name={name}
                    className="resize-none border-b border-gray-600 pb-2.5 text-xl outline-none focus:text-blue-900 dark:border-gray-200 dark:bg-inherit dark:focus:text-gray-50"
                />
            )}
        </div>
    )
}
