type Props = {
  text: string;
  placeholder: string;
  onSkill: (choice: string) => void;
  value: string[];
};

import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";

// export default function Dropdown({ text, placeholder }: Props) {
//   return (
{
  /* <div className="mt-6">
  <p className="text-slate-500 mb-3">{text}</p>
  <div className="flex items-center justify-between border-2 border-slate-200 w-full py-3 px-5 rounded-md">
    <p>{placeholder}</p>
    <i className="bx bx-chevron-down text-3xl"></i>
  </div>
</div>; */
}
//   );
// }

const fakeData = [
  "Programming",
  "Drawing",
  "Cooking",
  "Running",
  "Jumping",
  "Film Making",
  "Engineering",
];

export default function Dropdown({ text, placeholder, onSkill, value }: Props) {
  return (
    <Popover>
      <p className="text-slate-500 mb-3 mt-6">{text}</p>
      <PopoverTrigger className="flex items-center justify-between border-2 border-slate-200 w-full py-3 px-5 rounded-md">
        <div className="text-slate-500">{placeholder}</div>
        <i className="bx bx-chevron-down text-3xl"></i>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        style={{ width: "var(--radix-popover-trigger-width)" }}
        className="grid p-0"
      >
        {fakeData.map((item, index) => {
          const isClick = value.find((skill) => {
            return skill === item ? true : false;
          });

          // Some user sastifies the condition
          // .some = cek apakah didalam sebuah array, minimal harus ada 1 array return true maka akan return true

          // Every user sastisfies the condition
          // .every = cek apakah didalam sebuah array, setiap item harus ada 1 array return true maka akan return true

          // ????
          // .reduce = tidak rekomen pakai
          return (
            <button
              className="p-2 hover:bg-slate-200 cursor-pointer"
              onClick={() => onSkill(item)}
              style={{ fontWeight: isClick ? "bold" : "" }}
            >
              {item}
            </button>
          );
        })}
      </PopoverContent>
    </Popover>
  );
}
