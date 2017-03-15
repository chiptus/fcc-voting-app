import { load, save } from 'redux-localstorage-simple';

export const preloadedState = load();
export const saveMiddleware = save();
