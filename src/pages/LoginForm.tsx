import { Link } from "react-router-dom";
import Button from "../components/UI/Button";
import AuthHeader from "../components/auth/AuthHeader";
import Input from "../components/UI/Input";
import Navbar from "../general/Navbar";
import { useEffect, useState } from "react";

// const [isOpen, setIsOpen] = useState(false);

/**
 * Rules of UseEffect
 * 1. Harus selalu pake array -> kalo ga sama aja kaya ga pake useEffect
 * 2. Kalo kita tambahin eventListener -> harus di remove (cleanup)
 * 3. Masukin data ke dependency sesuai yang dimauin react
 * 4. Jangan masukin stateSetter kalo ada stateValuenya -> kalo ga meledak komputernya
 */
// useEffect(() => {
//   const handleClick = () => {
//     console.log("click");
//   };

//   console.log(isOpen);

//   // setIsOpen(false); -> haram

//   window.addEventListener("click", handleClick);

//   // CLEANUP FUNCTION
//   return () => {
//     window.removeEventListener("click", handleClick);
//   };
//   // DEPENDENCY ARRAY
// }, [isOpen]);

export default function LoginForm() {
  //terdapat 3 tahap life-cycle: mount, re-render, unmount
  //mount saat membaca code
  //re-render saat update
  //unmount saat komponen nya menghilang dari screen

  /**
   * Rules of UseEffect
   * 1. Harus selalu pake array -> kalo ga sama aja kaya ga pake useEffect
   * 2. Kalo kita tambahin eventListener -> harus di remove (cleanup)
   * 3. Masukin data ke dependency sesuai yang dimauin react
   * 4. Jangan masukin stateSetter kalo ada stateValuenya -> kalo ga meledak komputernya
   */

  //Berjalan pada saat mount
  useEffect(() => {
    //Address buat bisa di delete
    const handleResize = () => {
      console.log("resizing");
    };

    window.addEventListener("resize", handleResize);

    // Clean Up Function
    return () => {
      window.removeEventListener("resizing", handleResize);
    };
    //DEPENDENCY ARRAY,
    // kalo gk ada array berarti bakal jalan setiap mount dan re render
    // kalo terdapat value di dalam array, berarti bakal berjalan setiap value di dalam array tersebut berubah
  }, []);

  return (
    <div className="grid place-items-center py-16 min-h-screen bg-slate-100">
      <Navbar />
      <Link to="/register">Go to Register</Link>
      <main className="bg-white p-10 rounded-md w-full max-w-[40rem]">
        <AuthHeader text="Login" url="/register" alert="Don't" />

        <Input text="Email" placeholder="example@gmail.com" type="text" />
        <Input text="Password" placeholder="********" type="password" />

        <div className="flex justify-end">
          <Button variant="primary">Login</Button>
          {/* <Button variant="secondary">Login</Button>
          <Button variant="tertiary">Login</Button> */}
        </div>
      </main>
    </div>
  );
}
