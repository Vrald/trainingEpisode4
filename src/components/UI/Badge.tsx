type Props = {
  text: string;
  onDelete: (text: string) => void;
};

export default function Badge({ text, onDelete }: Props) {
  return (
    <div className="text-slate-800 bg-slate-100 px-4 py-2 rounded-md flex items-center gap-2">
      {text}
      <i
        className="bx bx-x text-xl cursor-pointer"
        onClick={() => onDelete(text)}
      ></i>
    </div>
  );
}
