import { pathEq, path } from 'ramda';

export const env = (key) => path(['env', key])(process);
export const envEq = (key, compare) => pathEq(['env', key], compare)(process);

export const isDev = envEq('NODE_ENV', 'development');
