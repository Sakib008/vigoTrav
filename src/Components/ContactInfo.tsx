import { FormInput } from "./FormInput";

interface ContactFormProps {
  form: {
    address: string;
    phone: string;
    website: string;
    email: string;
    notes: string;
  };
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}
export const ContactInfo = ({ form, onChange }: ContactFormProps) => (
  <>
    <FormInput
      label="Address"
      name="address"
      value={form.address}
      onChange={onChange}
      placeholder="Your name"
    />
    <div className="flex gap-x-3">
      <FormInput
        label="Phone"
        name="phone"
        value={form.phone}
        onChange={onChange}
        placeholder="9312934678"
        type="number"
      />
      <FormInput
        label="Email"
        name="email"
        value={form.email}
        onChange={onChange}
        placeholder="you@example.com"
        type="email"
      />
    </div>
    <FormInput
      label="Website"
      name="website"
      value={form.website}
      onChange={onChange}
      placeholder="you@example.com"
      type="email"
    />
    <FormInput
      label="Notes"
      name="notes"
      value={form.notes}
      onChange={onChange}
      placeholder="You are awesome!, Keep up the good work!"
      as="textarea"
    />
  </>
);
