import { server } from './src/mocks/server';

// 모든 테스트 시작 전에 모킹 서버 켜기
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

// 각 테스트 이후 핸들러 리셋(테스트 간 간섭 방지)
afterEach(() => server.resetHandlers());

// 전체 테스트 끝나면 서버 종료
afterAll(() => server.close());
