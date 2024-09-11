import { ReactNode, HTMLAttributes, Children } from "react";

// interface Props = { same aja
//   children: ReactNode;
//   // String Union -> auto complete (cuma boleh ke tiga ini aja)
//   variant: "primary" | "secondary" | "tertiary";
// };

// type MyProps = {
//   children: ReactNode;
//   // String Union -> auto complete (cuma boleh ke tiga ini aja)
//   variant: "primary" | "secondary" | "tertiary";
//   //HTMLAttribute
// };
// type ReactProps = HTMLAttributes<HTMLButtonElement>;
// type Props = MyProps & ReactProps;
// type Props = {...MyProps, ...ReactProps}

const variants = {
  primary: "bg-indigo-600 text-white hover:bg-indigo-500",
  secondary: "bg-slate-200 text-slate-900 hover:bg-slate-100",
  tertiary: "bg-transparent border border-slate-100 hover:bg-slate-50",
};

type Props = {
  children: ReactNode;
  // variant: "primary" | "secondary" | "tertiary";
  variant: keyof typeof variants;
};

// ...{something} //Destructure Operator (ngelepas cangkang yang udah ada contoh {} dari {object})

// ...{something} //REST OPERATOR -> biasanya ini ada di parameter component
// {
//   Children
//   variants
//   props: {
//     onclick
//     onchange
//     onabort
//     ...
//   }
// }

export default function Button({
  children,
  variant,
  ...props
}: Props & HTMLAttributes<HTMLButtonElement>) {
  // if (variant === "primary") {
  //   return (
  //     <button className="bg-indigo-600 text-white rounded-md px-6 py-3 mt-6 hover:bg-indigo-500 transition-all duration-200 cursor-pointer">
  //       {children}
  //     </button>
  //   );
  // }
  // if (variant === "secondary") {
  //   return (
  //     <button className="bg-indigo-600 text-white rounded-md px-6 py-3 mt-6 hover:bg-indigo-500 transition-all duration-200 cursor-pointer">
  //       {children}
  //     </button>
  //   );
  // }
  // if (variant === "tertiary") {
  //   return (
  //     <button className="bg-indigo-600 text-white rounded-md px-6 py-3 mt-6 hover:bg-indigo-500 transition-all duration-200 cursor-pointer">
  //       {children}
  //     </button>
  //   );
  // }

  // COMPILER -> COMPILATION ()

  return (
    <button
      //Destructure dalam komponent
      {...props}
      className={`${variants[variant]} rounded-md px-6 py-3 mt-6 transition-all duration-200 cursor-pointer`}
    >
      {children}
    </button>
  );
}
