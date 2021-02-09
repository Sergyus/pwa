// https://foxhound87.medium.com/state-management-hydration-with-mobx-we-must-react-ep-05-1922a72453c6

/**
 * Dehydrate (on server)
 */
export function dehydrateStore(store: RootStore): string {
  return JSON.stringify({ ...store });
}

/**
 * Rehydrate (on client)
 */
export function rehydrateStore(name: keyof RootStore): RootStore | null {
  return __CLIENT__ ? (window.__INITIAL_STATE__?.[name] as RootStore) : null;
}
