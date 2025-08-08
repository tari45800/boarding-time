import { SignupFrom } from "@/components/signup/SignupFrom";
import React from "react";

const SignupPage = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-2xl font-bold">회원가입 페이지</div>
      <SignupFrom />
    </div>
  );
};

export default SignupPage;
