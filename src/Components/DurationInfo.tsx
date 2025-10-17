import { FormInput } from "./FormInput";

interface ContactFormProps {
  form: {
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    totalDuration: string;
  };
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}
const durationCalculator : = (startDate, startTime, endDate, endTime) => {
  const startDateTime = new Date(startDate + " " + startTime);
  const endDateTime = new Date(endDate + " " + endTime);
  const duration = endDateTime - startDateTime;
  return duration;
};

export const DurationInfo = ({ form, onChange }: ContactFormProps) => (
  <>
   <div className="flex gap-x-3">
    <FormInput
      label="Start Date"
      name="startDate"
      value={form.startDate}
      onChange={onChange}
      placeholder="2023-01-01"
      type="date"
    />
    <FormInput
      label="Start Time"
      name="startTime"
      value={form.startTime}
      onChange={onChange}
      placeholder="10:00 AM"
      type="date"
      inputClassName=""
      />
   </div>
    <div className="flex gap-x-3">
      <FormInput
        label="End Date"
        name="endDate"
        value={form.endDate}
        onChange={onChange}
        placeholder="2023-01-01"
        type="date"
      />
      <FormInput
        label="End Time"
        name="endTime"
        value={form.endTime}
        onChange={onChange}
        placeholder="10:00 AM"
        type="date"
        />
    </div>
    <h1 className="text-lg font-bold">Total Duration : <span className="text-red-500">{form.totalDuration}</span></h1>
  </>
);
