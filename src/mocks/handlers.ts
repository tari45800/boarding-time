// src/mocks/handlers.ts
import { http, HttpResponse } from 'msw';

import type { signupInputs } from '@/types/signup';

export const handlers = [
  http.post('*/auth/signup', async ({ request }) => {
    // ✅ 제네릭 말고 assertion으로
    const body = (await request.json()) as signupInputs;

    if (!body?.id || !body?.passwd) {
      return HttpResponse.json({ message: '필수값 누락' }, { status: 400 });
    }
    if (body.id === 'taken') {
      return HttpResponse.json({ message: '이미 사용 중인 아이디' }, { status: 409 });
    }
    return HttpResponse.json({ ok: '빠바바밤', userId: body.id }, { status: 201 });
  }),

  http.get('*/api/user', () => HttpResponse.json({ name: '홍길동' }, { status: 200 })),
];
