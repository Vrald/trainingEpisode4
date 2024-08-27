import { useNavigate } from "react-router-dom";

type Props = {
  text: string;
  url: string;
  alert: string;
};

export default function AuthHeader({ text, url, alert }: Props) {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-3xl font-semibold">{text}</h1>
      <p className="text-slate-700 mb-8 mt-4">
        {alert} have an account?{" "}
        <span
          className="underline text-indigo-600 hover:text-indigo-400 transition-all duration-200 cursor-pointer"
          onClick={() => navigate(url)}
        >
          Sign Up
        </span>
      </p>
    </>
  );
}
