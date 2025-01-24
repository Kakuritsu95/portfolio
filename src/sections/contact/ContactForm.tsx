import { FormEvent, useState } from "react"
import ContactFormField from "../../ui/ContactFormField"
import Button from "../../ui/Button"
import { LiaSpinnerSolid } from "react-icons/lia"
export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsSubmitting(true)
        const form = new FormData(e.currentTarget)
        const formData = Object.fromEntries(form)
        // await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORM_ID}`, {
        //     method: "POST",
        //     body: JSON.stringify(formData),
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // })
        const hi = await new Promise((res, rej) => {
            setTimeout(() => res("hi"), 3000)
        })
        console.log(hi)
        setIsSubmitting(false)
    }
    return (
        <form onSubmit={handleSubmit} className="space-y-12">
            <div className="flex flex-col justify-between gap-12 xl:w-[55rem] xl:flex-row">
                <ContactFormField
                    labelText="Your name"
                    name="name"
                    placeHolder="Enter your name"
                />
                <ContactFormField
                    labelText="Your email address"
                    name="email"
                    placeHolder="Enter your email address"
                />
            </div>
            <div className="flex flex-1">
                <ContactFormField
                    labelText="Your Message"
                    type="textarea"
                    name="message"
                    placeHolder="Hey there! Let's talk about..."
                />
            </div>
            <Button color="rose" disabled={isSubmitting}>
                {isSubmitting ? (
                    <LiaSpinnerSolid
                        size={28}
                        className="mx-[1.15rem] animate-spin"
                    />
                ) : (
                    <span className="">Submit</span>
                )}
            </Button>
        </form>
    )
}
