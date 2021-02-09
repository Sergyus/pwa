import { rootStore } from './registration';

declare global {
  type RootStore = typeof rootStore;
}
