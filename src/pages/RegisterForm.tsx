import { useState } from "react";
import AuthHeader from "../components/auth/AuthHeader";
import Badge from "../components/UI/Badge";
import Button from "../components/UI/Button";
import Dropdown from "../components/UI/Dropdown";
import Input from "../components/UI/Input";
import Select from "../components/UI/Select";
import { text } from "stream/consumers";

const fakeData = [
  "Programming",
  "Drawing",
  "Cooking",
  "Running",
  "Jumping",
  "Film Making",
  "Engineering",
];

type Props = {
  skill: string;
};

// "Truthy" -> value

// "Falsy" -> 0, "", undefined, null

export default function RegisterForm() {
  const [skillList, setSkillList] = useState<Props[]>([]);

  const handleSkill = (choice: string) => {
    // 1. masuking value nya
    const newSkill = { skill: choice };

    // 2. Ngecek udh ada ato belum
    const found = skillList.find((list) => {
      return list.skill === choice ? true : false;
    });
    //3. kalo ada delete

    // 4. kalo gk ada, gabungkan
    if (found) {
      return handleDelete(choice);
    }
    const List = [...skillList, newSkill];

    // Set SkillList (data)
    setSkillList(List);
  };

  const handleDelete = (text: string) => {
    const newList = skillList.filter((skill, idx) => {
      return skill.skill !== text;
    });

    setSkillList(newList);
  };

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

        <Dropdown
          placeholder="Select Skill"
          text="Skill"
          onSkill={handleSkill}
          value={skillList.map((skill) => {
            return skill.skill;
          })}
        />
        <div className="flex flex-wrap mt-6 gap-4 mb-4">
          {skillList.map((skill, index) => {
            return (
              <Badge text={skill.skill} key={index} onDelete={handleDelete} />
            );
          })}
        </div>
        <div className="flex justify-end">
          <Button variant="primary">Create Account</Button>
        </div>
      </main>
    </div>
  );
}
