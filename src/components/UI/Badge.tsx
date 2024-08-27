type Props = {
  text: string;
};

export default function Badge({ text }: Props) {
  return (
    <div className="text-slate-800 bg-slate-100 px-4 py-2 rounded-md flex items-center gap-2">
      {text}
      <i className="bx bx-x text-xl"></i>
    </div>
  );
}
