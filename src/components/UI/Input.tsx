type Props = {
  text: string;
  placeholder: string;
  type: string;
};

export default function Input({ text, placeholder, type }: Props) {
  return (
    <div className="mt-6">
      <p className="text-slate-500 mb-3">{text}</p>
      <input
        type={type}
        className="border-2 border-slate-200 w-full py-4 px-5 rounded-md"
        placeholder={placeholder}
      />
    </div>
  );
}
