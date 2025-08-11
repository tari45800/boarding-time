// Zod 스키마
import { z } from 'zod';

export const signupSchema = z.object({
  name: z.string().min(1, '이름은 필수입니다.'),
  nickName: z.string().min(1, '닉네임은 필수입니다.'),
  id: z.string().min(1, '아이디는 필수입니다.'),
  passwd: z.string().min(4, '비밀번호는 4자리 이상이어야 합니다.'),
  // .refine(
  //   (val) =>
  //     /[A-Z]/.test(val) && /[a-z]/.test(val) && /[^a-zA-Z0-9]/.test(val),
  //   {
  //     message: "비밀번호는 특수문자, 대문자, 소문자를 포함해야 합니다.",
  //   }
  // )
  email: z.string().email('올바른 이메일 형식이 아닙니다.'),
  phone: z.string().regex(/^0\d{1,2}-?\d{3,4}-?\d{4}$/, '전화번호 형식이 아닙니다.'),
});

export type signupInputs = z.infer<typeof signupSchema>;
