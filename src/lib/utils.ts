//Utility = function yang bisa di pake dimana aja
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//Optional Chaining
// const person = {
//   name: "lel",
//   address: {
//     city: "jakarta",
//     country: "Indonesia",
//     // domisili: {
//     //   rt: 4,
//     //   rw: 9,
//     // },
//   },
// };

//Dia ngethrow sebuah error
// console.log(person.address?.domisili?.rw);
