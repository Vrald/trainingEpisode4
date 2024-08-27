type Props = {
  text: string;
};

export default function Select({ text }: Props) {
  return (
    <div className="flex px-5 py-4 items-center justify-start gap-3 border-2 border-slate-200 rounded-md">
      <div className="w-4 h-4 rounded-full border-2 border-indigo-700"></div>
      <p>{text}</p>
    </div>
  );
}
