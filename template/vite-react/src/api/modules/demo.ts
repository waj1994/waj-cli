import $axios from '..';

/**
 * demo
 */
export const demo = (): Promise<{ list: string[] }> => {
  return $axios.get('/advertise-list');
};
