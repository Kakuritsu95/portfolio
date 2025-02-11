import { FormEvent, useState } from "react"
import ContactFormField from "../../ui/ContactFormField"
import Button from "../../ui/Button"
import { LiaSpinnerSolid } from "react-icons/lia"

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [error, setError] = useState<string>()
    const [isSubmitSuccess, setIsSubmitSuccess] = useState(false)
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsSubmitting(true)
        const form = new FormData(e.currentTarget)
        const formData: { [k: string]: FormDataEntryValue } =
            Object.fromEntries(form)
        const response: Response = await fetch(
            `https://formspree.io/f/${import.meta.env.VITE_FORM_ID}`,
            {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                },
            },
        )
        if (response.status !== 200) setError("Something went wrong")
        else {
            setError("")
            setIsSubmitSuccess(true)
        }

        setIsSubmitting(false)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-12">
            {error && (
                <p className="font-semibold text-red-400">
                    {error}. Please contact directly with my email address.
                </p>
            )}
            {isSubmitSuccess && (
                <p className="text-center text-lg font-semibold text-green-500">
                    Thank you for reaching out! I’ve received your message and
                    will get back to you as soon as possible. Looking forward to
                    connecting with you!
                </p>
            )}
            <div className="flex flex-col justify-between gap-12 xl:w-[55rem] xl:flex-row">
                <ContactFormField
                    labelText="Your name"
                    name="name"
                    placeHolder="Enter your name"
                />
                <ContactFormField
                    labelText="Your email address"
                    name="email"
                    type="email"
                    placeHolder="Enter your email address"
                />
            </div>
            <div className="flex flex-1">
                <ContactFormField
                    labelText="Your Message"
                    inputType="textarea"
                    name="message"
                    placeHolder="Hey there! Let's talk about..."
                />
            </div>
            <div>
                <Button color="rose" disabled={isSubmitting}>
                    {isSubmitting ? (
                        <LiaSpinnerSolid
                            size={28}
                            className="mx-[1.15rem] animate-spin"
                        />
                    ) : (
                        <span>Submit</span>
                    )}
                </Button>
            </div>
        </form>
    )
}
