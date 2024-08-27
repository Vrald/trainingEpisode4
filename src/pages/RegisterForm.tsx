import AuthHeader from "../components/auth/AuthHeader";
import Badge from "../components/UI/Badge";
import Button from "../components/UI/Button";
import Dropdown from "../components/UI/Dropdown";
import Input from "../components/UI/Input";
import Select from "../components/UI/Select";

const fakeData = [
  "Programming",
  "Drawing",
  "Cooking",
  "Running",
  "Jumping",
  "Film Making",
  "Engineering",
];

export default function RegisterForm() {
  return (
    <div className="grid place-items-center py-16 min-h-screen bg-slate-100">
      <main className="bg-white p-10 rounded-md w-full max-w-[50rem]">
        <AuthHeader text="Sign Up" url="/login" alert="Have" />
        <div>
          <p className="text-slate-500 mb-3">Looking for?</p>
          <div className="grid grid-cols-2 gap-6">
            <Select text="Projects" />
            <Select text="Hobby" />
          </div>
        </div>

        <Input text="Email" placeholder="example@gmail.com" type="email" />

        <Input text="Password" placeholder="**********" type="password" />

        <Dropdown text="Skills" placeholder="Select Skill" />
        <div className="flex flex-wrap mt-6 gap-4 mb-4">
          {fakeData.map((skill, index) => {
            return <Badge text={skill} key={index} />;
          })}
        </div>
        <div className="flex justify-end">
          <Button>Create Account</Button>
        </div>
      </main>
    </div>
  );
}
