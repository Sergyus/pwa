declare const __CLIENT__: boolean;
declare const __SERVER__: boolean;
declare const __DEV__: boolean;
declare const __PROD__: boolean;

interface Window {
  __INITIAL_STATE__: Record<string, unknown>;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      PUBLIC_URL: string;
      PORT?: string;
      PWD: string;
    }
  }
}
