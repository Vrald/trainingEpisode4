type Props = {
  text: string;
  placeholder: string;
};

export default function Dropdown({ text, placeholder }: Props) {
  return (
    <div className="mt-6">
      <p className="text-slate-500 mb-3">{text}</p>
      <div className="flex items-center justify-between border-2 border-slate-200 w-full py-3 px-5 rounded-md">
        <p>{placeholder}</p>
        <i className="bx bx-chevron-down text-3xl"></i>
      </div>
    </div>
  );
}
