import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Button({ children }: Props) {
  return (
    <button className="bg-indigo-600 text-white rounded-md px-6 py-3 mt-6 hover:bg-indigo-500 transition-all duration-200 cursor-pointer">
      {children}
    </button>
  );
}
