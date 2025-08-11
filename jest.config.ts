import { createDefaultPreset } from 'ts-jest';

const tsJest = createDefaultPreset().transform;

const config: import('jest').Config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    ...tsJest,
  },
};
export default config;
