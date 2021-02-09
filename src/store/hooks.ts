import { useContext } from 'react';
import { StoreContext } from './index';

/**
 * UseStore Hook
 */
const useStore = <T extends keyof RootStore>(storeKey: T): RootStore[T] => {
  const store = useContext(StoreContext) as RootStore;
  if (!store) {
    throw new Error('Store not found');
  }

  return store[storeKey];
};

export default useStore;
