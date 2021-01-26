/**
 * Serialize State
 * @param state
 */
export const serializeState = (state: { [key: string]: string }): string => {
  return JSON.stringify(state).replace(/</g, '\\u003c');
};
