import { Link } from "react-router-dom";
import Button from "../components/UI/Button";
import AuthHeader from "../components/auth/AuthHeader";
import Input from "../components/UI/Input";

export default function LoginForm() {
  return (
    <div className="grid place-items-center py-16 min-h-screen bg-slate-100">
      <Link to="/register">Go to Register</Link>
      <main className="bg-white p-10 rounded-md w-full max-w-[40rem]">
        <AuthHeader text="Login" url="/register" alert="Don't" />

        <Input text="Email" placeholder="example@gmail.com" type="text" />
        <Input text="Password" placeholder="********" type="password" />

        <div className="flex justify-end">
          <Button>Login</Button>
        </div>
      </main>
    </div>
  );
}
