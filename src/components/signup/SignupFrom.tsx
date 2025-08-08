"use client";
import React from "react";
import {
  useForm,
  SubmitHandler,
  UseFormRegister,
  FieldErrors,
  Path,
  FieldValues,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupInputs, signupSchema } from "@/types/signup";

// 폼 컴포넌트
export const SignupFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // register, handleSubmit 안정성을 위한 타입
  } = useForm<signupInputs>({
    resolver: zodResolver(signupSchema),
  });

  // SubmitHandler: 좀 더 명확한 서브밋 핸들러 표시
  const onSubmit: SubmitHandler<signupInputs> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full max-w-md gap-4"
    >
      <InputField<signupInputs>
        label="이름"
        id="name"
        register={register}
        errors={errors}
      />
      <InputField<signupInputs>
        label="닉네임"
        id="nickName"
        register={register}
        errors={errors}
      />
      <InputField<signupInputs>
        label="아이디"
        id="id"
        register={register}
        errors={errors}
      />
      <InputField<signupInputs>
        label="비밀번호"
        id="passwd"
        type="password"
        register={register}
        errors={errors}
      />
      <InputField<signupInputs>
        label="이메일"
        id="email"
        type="email"
        register={register}
        errors={errors}
      />
      <InputField<signupInputs>
        label="전화번호"
        id="phone"
        register={register}
        errors={errors}
      />

      <button className="px-3 py-2 text-white bg-sky-500 rounded" type="submit">
        제출
      </button>
    </form>
  );
};

// FieldValues: 객체형태의 폼 데이터를 받을 수 있게
// ex) FieldValues에는 signupInputs이 들어간다.
type InputFieldProps<TsignupInputs extends FieldValues> = {
  label: string;
  type?: string;
  // Path: 폼 객체 안에 있는 필드 이름(key)만 쓸 수 있게 제한
  id: Path<TsignupInputs>;
  register: UseFormRegister<TsignupInputs>;
  errors: FieldErrors<TsignupInputs>;
};

const InputField = <TsignupInputs extends FieldValues>({
  label,
  id,
  type = "text",
  register,
  errors,
}: InputFieldProps<TsignupInputs>) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-medium">{label}</label>
    <input
      className="border px-2 py-2 rounded w-full"
      type={type}
      {...register(id)}
    />
    {errors[id]?.message && (
      <span className="text-red-500 text-sm">
        {String(errors[id]?.message)}
      </span>
    )}
  </div>
);
