import Link from "next/link";
import LoginForm from "@/app/components/LoginForm";

export default function Home() {
  return (
      <div className={`w-full min-h-screen flex flex-col items-center pt-16`}>
          <h1 className={`text-4xl font-bold mb-4`}>School Management System, [S.M.S]</h1>
          <LoginForm/>
      </div>
  );
}
