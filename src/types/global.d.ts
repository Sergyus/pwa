declare const __CLIENT__: boolean;
declare const __SERVER__: boolean;
declare const __DEV__: boolean;
declare const __PROD__: boolean;

interface Window {
  __INITIAL_STATE__: Record<string, unknown>;
}

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    PUBLIC_URL: string;
    PORT?: string;
    PWD: string;
  }
  interface Global {
    __CLIENT__: boolean;
    __SERVER__: boolean;
    __DEV__: boolean;
    $RefreshReg$: () => void;
    $RefreshSig$$: () => void;
  }
}
