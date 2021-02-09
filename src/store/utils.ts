import { NormalizedCacheObject } from '@apollo/client';
// https://foxhound87.medium.com/state-management-hydration-with-mobx-we-must-react-ep-05-1922a72453c6

/**
 * Dehydrate (on server)
 */
export function dehydrateState(
  store: RootStore | NormalizedCacheObject,
): string {
  return JSON.stringify({ ...store }).replace(/</g, '\\u003c');
}

/**
 * Rehydrate (on client)
 */
export function rehydrateState(name: keyof RootStore): RootStore | null {
  return __CLIENT__ ? (window.__INITIAL_STATE__?.[name] as RootStore) : null;
}
