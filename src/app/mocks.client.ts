'use client';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  import('../mocks/browser').then(({ worker }) => {
    worker.start({ onUnhandledRequest: 'bypass' });
  });
}
export default function MocksBootstrap() {
  return null;
}
