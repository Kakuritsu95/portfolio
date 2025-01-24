interface ContactFormFieldProps {
    type?: "input" | "textarea"
    name: string
    placeHolder: string
    labelText: string
}
export default function ContactFormField({
    type = "input",
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

            {type == "input" ? (
                <input
                    type="text"
                    name={name}
                    id={name}
                    placeholder={placeHolder}
                    className="border-b border-gray-600 pb-2.5 text-xl outline-none focus:text-blue-900 dark:border-gray-200 dark:bg-inherit dark:focus:text-gray-50"
                />
            ) : (
                <textarea
                    placeholder={placeHolder}
                    name={name}
                    className="resize-none border-b border-gray-600 pb-2.5 text-xl outline-none focus:text-blue-900 dark:border-gray-200 dark:bg-inherit dark:focus:text-gray-50"
                />
            )}
        </div>
    )
}
