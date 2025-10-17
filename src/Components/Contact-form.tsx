import { useRef, useState } from "react";
import { FormInput } from "./FormInput";
import { toast } from "sonner";
export const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { name, email, message } = form;
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill all the fields");
      return;
    }
    const toastId = toast.loading("Sending...");
    toast.dismiss(toastId);
  };

  return (
    <form
      className="mx-auto flex max-w-lg my-6 py-12 px-4 flex-col gap-4"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <FormInput
        label="Name"
        name="name"
        onChange={handleChange}
        value={form.name}
        placeholder={"Mohammad Sakib"}
      />
      <FormInput
        label="Email"
        name="email"
        onChange={handleChange}
        value={form.email}
        placeholder={"mdshakib1902@gmail.com"}
      />
      <FormInput
        as="textarea"
        label="Message"
        name="message"
        onChange={handleChange}
        value={form.message}
        placeholder={"You are awesome!, Keep up the good work!"}
      />
      <FormInput
        as="button"
        name="submit"
        type="submit"
        inputClassName="bg-neutral-800 text-white "
      >
        Send Message
      </FormInput>
    </form>
  );
};
